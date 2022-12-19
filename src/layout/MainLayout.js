import React from 'react'
import styled from 'styled-components'
import {style} from '../const/style'
import { Header } from '../component/module/Header'
import { Container } from '../component/module/Container'
import { Footer } from '../component/module/Footer'

const MainLayoutStyled = styled.div`
`
export const  MainLayout = () =>  {
  return (
    <MainLayoutStyled>
        <Header/>
        <Container/>
        <Footer/>
    </MainLayoutStyled>
  )
}
