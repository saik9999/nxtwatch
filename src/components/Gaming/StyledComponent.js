import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`

export const TrendingContainer = styled.div`
  width: 80%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 90vh;
  overflow-y: scroll;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const IconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  height: 120px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 575px) {
    height: 80px;
  }
`
export const IconCon = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e1e9f0')};
  height: 80px;
  width: 80px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  @media screen and (max-width: 575px) {
    margin-left: 20px;
    height: 60px;
    width: 60px;
  }
`

export const TrendingText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  margin-left: 20px;
  @media screen and (max-width: 575px) {
    font-size: 25px;
    margin-left: 10px;
  }
`

export const TrendingVideoCon = styled.ul`
  padding: 20px 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 575px) {
    padding: 0;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    padding: 10px;
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
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  height: 40px;
  width: 100px;
  border-radius: 5px;
  color: #ffffff;
  border-width: 0px;
  margin-top: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
