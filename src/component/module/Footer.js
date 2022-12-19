import React from 'react'
import styled from 'styled-components'
import { style } from '../../const/style'

const FooterStyled = styled.div`
  background-color: ${style.footer.background};
  padding: ${style.footer.padding};
  display: flex;
  flex-direction: column;
  align-items: center; 
  .footer-title {
    color: ${style.text.titleColor};
  }
`
export const  Footer = () => {
  return (
    <FooterStyled><h1 className='footer-title'>Footer</h1></FooterStyled>
  )
}
