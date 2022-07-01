import styled from 'styled-components'

export const Li = styled.li`
  list-style-type: none;
  padding: 10px 15px;
  border-left: ${props => (props.isActive ? '3px solid #ff0000' : '')};
  color: ${props => (props.isDark ? '#cccccc' : '#909090')};
  background-color: ${props =>
    props.isDark ? props.isActive && '#383838' : props.isActive && '#f1f5f9'};
`
export const Head = styled.p`
  font-family: 'Roboto';
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  color: ${props =>
    props.isDark ? props.isActive && '#ffffff' : props.isActive && '#1e293b'};
`
export const TabButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  color: ${props => (props.isActive ? '#ff0000' : '')};
`
