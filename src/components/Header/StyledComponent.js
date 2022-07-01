import styled from 'styled-components'

export const Nav = styled.nav`
  height: 10vh;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props => (props.isDark ? 'none' : '1px solid #f3f3f3')};
  background-color: ${props => (props.isDark ? '#212121' : '##ffffff')};
`
export const NavOptions = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavOptionsMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 150px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const User = styled.img`
  height: 30px;
  width: 30px;
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border: ${props =>
    props.isDark ? '1px solid #ffffff' : '2px solid #3b82f6'};
  border-radius: 3px;
  height: 30px;
  width: 100px;
  font-weight: bold;
  cursor: pointer;
`
export const Hamberg = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '')};
  outline: none;
  border-width: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Btn = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  height: 165px;
  width: 360px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 576px) {
    width: 310px;
  }
`

export const PopupText = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  margin-top: 0;
`
export const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 58%;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    width: 68%;
  }
`

export const PopupBtn = styled.button`
  height: 40px;
  width: 90px;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 2px;
  font-size: 17px;
`
export const CancelBtn = styled(PopupBtn)`
  border: 1px solid #616e7c;
  color: #616e7c;
  background-color: transparent;
`
