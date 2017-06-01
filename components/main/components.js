import styled from 'styled-components'

export const Container = styled.main`
  grid-area: nav-main;
  
  background: palevioletred;
  
  opacity:    0.5;
  pointer-events: none;
  
  @media (min-width: 768px) {    
    grid-area: main;
    
    opacity: 1;
  }
`
