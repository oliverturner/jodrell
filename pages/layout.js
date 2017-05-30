import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
 
  grid-template-areas: "head"
                       "nav-main"
                       "foot";
                         
  grid-template-rows:    auto 1fr auto;
  grid-template-columns: 1fr;
  
  height:   100vh;
  overflow: hidden;
  
  @media(min-width: 768px) {
    grid-template-areas: "head head"
                         "nav  main"
                         "nav  foot";

    grid-template-rows:    auto 1fr auto;
    grid-template-columns: 300px 1fr;
  }
`

export default ({children}) => (
  <Layout>
    {children}
  </Layout>
)
