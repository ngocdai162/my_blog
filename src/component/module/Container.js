import React from 'react'
import styled from 'styled-components'
import { Home } from './home/Home'


const ContainerStyled =  styled.div`
`
export const Container = () => {
  return (
    <ContainerStyled><Home/></ContainerStyled>
  )
}
