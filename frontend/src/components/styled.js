import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
`

export const Button = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
  user-select: none;
`

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`

export const Footer = styled.footer`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
`
