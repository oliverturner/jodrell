// @flow

import React from 'react'

import {List, ListItem} from './components'

type Props = {
  edges: Array<Edge>
}

const Repos = ({edges}: Props): React$Element<*> => (
  <List>
    {edges.map(({node}, index) => (
      <ListItem key={node.id}>
        <span>{index + 1}. </span>
        <a href={node.url}>{node.name}</a>
      </ListItem>
    ))}
  </List>
)

export default Repos
