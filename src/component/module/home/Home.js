import React from 'react'
import styled from 'styled-components'


const HomeStyled =  styled.div`
    width: 100%;
    position: relative;
    width: 100%;
    .home-video {
      position: absolute ;
      height: 400px;
      top: 0px;
      left: 0px;
      right: 0px;
      background-color: blue;
    }

    .home-title {
      height: 400px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
        &__text {
          color: #fff;
          z-index: 10;
        }
      }

    .home-content {
      height: 200px;
      background-color: #333;
    }
`;

export const  Home = () => {
  return (
    <HomeStyled>
          <div className='home-video'></div>
          <div className='home-title'>
            <h1 className='home-title__text'>Home title</h1>
          </div>
          <div className='home-content'></div>
    </HomeStyled>
  )
}
