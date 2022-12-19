import React from 'react'
import styled from 'styled-components'
import { style } from '../../const/style'

const HeaderStyled = styled.div`
  height: ${style.header.height};
  background-color: ${style.header.background};
  display: flex;
  flex-direction: column;
  align-items: center; 
  .header-title {
    color: ${style.text.titleColor};
  }
  .header-tab {

  }
`
export const Header = () => {
  return (
    <HeaderStyled>
      <h1 className='header-title'>Title</h1>
      <div className='header-tab'></div>
    </HeaderStyled>
  )
}
