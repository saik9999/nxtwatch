import styled from 'styled-components'

export const GamingLi = styled.li`
  width: 30%;
  list-style-type: none;
  margin: 20px 15px;
  @media screen and (max-width: 575px) {
    width: 41%;
    margin-left: 15px;
  }
`

export const GamingHead = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#030303')};
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  font-weight: bold;
  @media screen and (max-width: 575px) {
    font-size: 19px;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    font-size: 18px;
  }
`
export const GamingPara = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  margin-right: 5px;
  color: ${props => (props.isDark ? '#aaa' : '#606060')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const GamingImg = styled.img`
  width: 100%;
`
