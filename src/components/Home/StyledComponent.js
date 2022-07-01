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
export const VideoContainer = styled.div`
  padding: 20px 20px;

  @media screen and (max-width: 575px) {
    padding: 0;
    padding-top: 15px;
  }
`
export const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  border: ${props =>
    props.isDark ? '1px solid #3c3a3c' : '1px solid #cccccc'};
  height: 35px;
  @media screen and (max-width: 575px) {
    width: 95%;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    width: 80%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border-width: 0px;
  padding-left: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  color: ${props => (props.isDark ? '#f4f4f4' : '')};
`

export const SearchIconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313031' : '#f4f4f4')};
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: ${props =>
    props.isDark ? '1px solid #3c3a3c' : '1px solid #cccccc'};
`
export const VideoUlContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 575px) {
    flex-direction: column;
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
  width: 80px;
  border-radius: 5px;
  color: #ffffff;
  border-width: 0px;
  margin-top: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const SearchBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border-width: 0px;
  background-color: red;
  padding: 0;
  margin: 0;
`
