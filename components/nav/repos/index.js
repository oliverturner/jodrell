import React from 'react'

import {List, ListItem} from './components'

export default ({edges}) => (
  <List>
    {edges.map(({node}, index) => (
      <ListItem key={node.id}>
        <span>{index + 1}. </span>
        <a href={node.url}>{node.name}</a>
      </ListItem>
    ))}
  </List>
)
