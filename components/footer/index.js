// @flow

import React from 'react'

import {Container} from './components'

type Props = {
  children: React$Element<*>
}

const Footer = ({children}: Props): React$Element<*> => (
  <Container>{children}</Container>
)

export default Footer
