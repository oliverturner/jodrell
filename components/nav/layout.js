import React from 'react'

import {Container, Header, Body, Footer} from './components'
import Search from './search'
import Repos from './repos'

export default ({data, loadMorePosts}) => {
  const {viewer, loading}   = data
  const {edges, totalCount} = viewer.starredRepositories

  const areMorePosts = edges.length < totalCount

  return (
    <Container>
      <Header>
        <Search />
      </Header>
      <Body>
        <Repos edges={edges} />
      </Body>
      <Footer>
        {areMorePosts
          ? <button onClick={loadMorePosts}>{loading ? 'Loading...' : 'Show More'}</button>
          : <button disabled>Done</button>
        }
      </Footer>
    </Container>
  )

  return (
    <Container>
      <Header />
      <Body>Loading...</Body>
      <Footer />
    </Container>
  )
}
