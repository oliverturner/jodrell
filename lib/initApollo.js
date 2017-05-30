import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-unfetch'

import {token} from '../secrets.json'

let apolloClient = null

global.fetch = fetch

function create (initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: createNetworkInterface({
      uri: 'https://api.github.com/graphql', // Server URL (must be absolute)
      opts: {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    })
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
