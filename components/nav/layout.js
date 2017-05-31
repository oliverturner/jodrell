// @flow

import React from 'react'

import {Container, Header, Body, Footer} from './components'
import Search from './search'
import Repos from './repos'

type Props = {
  data: {viewer: Viewer, loading: boolean},
  loadMorePosts: Function
}

const Layout = ({data, loadMorePosts}: Props): React$Element<*> => {
  const loaded = data.viewer && data.viewer.starredRepositories

  if (!loaded) {
    return (
      <Container>
        <Header />
        <Body>Loading...</Body>
        <Footer />
      </Container>
    )
  }

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
}

export default Layout
