import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
`

export const Form = styled.form`
  width: 30%;
  box-shadow: ${props => (props.isDark ? 'none' : '0px 4px 16px 0px #bfbfbf')};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const Img = styled.img`
  width: 45%;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const InfoContainer = styled.div`
  width: 80%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const Input = styled.input`
  font-family: 'Roboto';
  color: #64748b;
  height: 40px;
  border: 1px solid #64748b;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 10px;
  outline: none;
  font-weight: 500;
  background-color: transparent;
`

export const Label = styled.label`
  color: ${props => (props.isDark ? '#f1f1f1' : '#64748b')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 10px;
`
export const ShowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
`
export const CheckLabel = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  font-family: 'Roboto';
  height: 40px;
  border-radius: 5px;
  border-width: 0px;
  color: #ffffff;
  width: 100%;
  outline: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0000;
  margin: 2px 0;
`
