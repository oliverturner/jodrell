import {gql} from 'react-apollo'

const starredRepositories = gql`
  query starredRepositories($first: Int!, $after: String) {
    viewer {
      starredRepositories(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            name
            url
            description
            pushedAt
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

export default starredRepositories
