import React from 'react'

import {List, Item} from './components'

const ListItem = ({name, url, index}) => (
  <Item>
    <span>{index}.</span>
    <a href={url}>{name}</a>
  </Item>
)

export default ({edges}) => (
  <List>
    {edges.map(({node}, index) => (
      <ListItem key={node.id} index={index + 1} {...node} />
    ))}
  </List>
)
