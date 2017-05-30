import styled from 'styled-components'

export const Container = styled.div`
  grid-area: nav-main;
  
  display: grid;
  grid-template-rows: auto 1fr auto;
  
  overflow-y: hidden;
  background: lightblue;
  
  @media (min-width: 768px) {
    grid-area: nav
  }
`

export const Header = styled.header`
  background: purple;
`

export const Body = styled.nav`
  overflow-y: auto;
`

export const Footer = styled.footer`
  background: purple;
`
