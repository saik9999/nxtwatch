import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 20%;
  height: 90vh;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 575px) {
    width: ${props => (props.mobileSideBar ? '300px' : '0px')};
    transition: width 0.3s;
    position: fixed;
    overflow: auto;
  }
  @media screen and (max-width: 767px) {
    width: ${props => (props.mobileSideBar ? '300px' : '0px')};
    transition: width 0.3s;
    position: fixed;
    overflow: auto;
  }
`

export const Ul = styled.ul`
  padding: 5px;
`
export const ContactUsCon = styled.div`
  padding: 20px;
`

export const Contact = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 20px;
  font-weight: 500;
`
export const MediaContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Logo = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;
`
export const ContactUsText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#424242')};
  font-size: 17px;
  font-weight: 500;
`
