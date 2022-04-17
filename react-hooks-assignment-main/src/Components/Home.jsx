import React from 'react'
import styled from 'styled-components'
import { Profile } from './Profile'
import { useSelector } from 'react-redux'

const Container = styled.div`
  margin: 0;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  height: 100vh;
  grid: 30px;
`
const GridItem1 = styled.div`
  grid-column: 1/3;
  background-color: yellow;
`
const GridItem2 = styled.div`
  grid-column: 3/6;
  background-color: pink;
`
const GridItem3 = styled.div`
  grid-column: 6/9;
  background-color: grey;
`
const GridItem4 = styled.div`
  grid-column: 9/12;
  background-color: tomato;
`

export const Home = () => {
  const {token, username} = useSelector((state) => state.login)

  return (
    <Container>
      <GridItem1>
        <Profile token={token} username = {username}/>
      </GridItem1>
      <GridItem2>TODO</GridItem2>
      <GridItem3>INPROGRESS</GridItem3>
      <GridItem4>DONE</GridItem4>
    </Container>
  )
}
