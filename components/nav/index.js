// @flow

import {gql, graphql} from 'react-apollo'
import {mergeDeepWithKey, concat} from 'ramda'

import starredRepositories from './query.graphql'
import Layout from './layout'

const POSTS_PER_PAGE = 100

const mergeRepos = (k, l, r) => k === 'edges' ? concat(l, r) : r

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(starredRepositories, {
  options: {
    variables: {
      skip:  0,
      first: POSTS_PER_PAGE
    }
  },

  props: ({data}) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables:   {
          after: data.viewer.starredRepositories.pageInfo.endCursor
        },
        updateQuery: (previousResult, {fetchMoreResult}) => {
          if (!fetchMoreResult) {
            return previousResult
          }

          return mergeDeepWithKey(mergeRepos,
            previousResult,
            fetchMoreResult
          );
        }
      })
    }
  })
})(Layout)
