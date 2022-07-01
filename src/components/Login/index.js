import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  Form,
  Img,
  InfoContainer,
  Input,
  Label,
  CheckBox,
  CheckLabel,
  ShowContainer,
  LoginBtn,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    passwordShow: false,
    username: '',
    password: '',
    errorMsgShow: false,
    errorMsg: '',
    loading: false,
  }

  showPassword = () => {
    this.setState(prevState => ({passwordShow: !prevState.passwordShow}))
  }

  onUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  onSubmit = async e => {
    this.setState({loading: true})
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorMsgShow: true, errorMsg, loading: false})
  }

  render() {
    const {passwordShow, errorMsgShow, errorMsg, loading} = this.state
    return (
      <ThemeContext.Consumer>
        {value => (
          <LoginContainer isDark={value.isDark}>
            <Form onSubmit={this.onSubmit} isDark={value.isDark}>
              <Img
                src={
                  value.isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
              />
              <InfoContainer>
                <Label isDark={value.isDark} htmlFor="name">
                  USERNAME
                </Label>
                <Input
                  onChange={this.onUsernameChange}
                  id="name"
                  placeholder="Username"
                />
                <Label isDark={value.isDark} htmlFor="password">
                  PASSWORD
                </Label>
                <Input
                  onChange={this.onPasswordChange}
                  id="password"
                  placeholder="Password"
                  type={passwordShow ? 'text' : 'password'}
                />
                <ShowContainer>
                  <CheckBox
                    onClick={this.showPassword}
                    id="check"
                    type="checkbox"
                  />
                  <CheckLabel isDark={value.isDark} htmlFor="check">
                    Show Password
                  </CheckLabel>
                </ShowContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {errorMsgShow && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </InfoContainer>
            </Form>
            {loading ? (
              <div>
                <Loader type="Oval" color="#ff0b37" height="50" width="50" />
              </div>
            ) : null}
          </LoginContainer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
