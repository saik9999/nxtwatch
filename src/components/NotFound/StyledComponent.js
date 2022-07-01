import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`

export const RightContainer = styled.div`
  width: 80%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  min-height: 90vh;
  overflow-y: scroll;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 25px;
`
export const FailurePara = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  font-family: 'Roboto';
  font-size: 20px;
  margin: 3px;
  text-align: center;
`
