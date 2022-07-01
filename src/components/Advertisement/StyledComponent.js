import styled from 'styled-components'

export const AddContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.img`
  width: 150px;
  @media screen and (max-width: 575px) {
    width: 150px;
  }
`
export const AddText = styled.p`
  font-family: 'Roboto';
  color: #424242;
  font-weight: 400;
  font-size: 21px;
  line-height: 1.5;
`
export const GetButton = styled.button`
  background-color: transparent;
  border: 2px solid #424242;
  height: 40px;
  width: 120px;
  color: #424242;
  font-weight: bold;
`
export const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 40%;
  @media screen and (max-width: 575px) {
    width: 70%;
  }
`
export const CloseBtn = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  cursor: pointer;
  align-self: flex-start;
`
