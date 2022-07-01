import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon, FaRegWindowClose} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeContext from '../../context/ThemeContext'
import {
  Nav,
  NavOptions,
  Logo,
  User,
  LogoutBtn,
  NavOptionsMobile,
  Hamberg,
  Btn,
  PopupContainer,
  PopupText,
  PopupBtn,
  BtnContainer,
  CancelBtn,
} from './StyledComponent'

const overlayStyle = {background: 'rgba(0,0,0,0.5)'}
const arrowStyle = {color: '#000'}

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme, onMobileSideBar, mobileSideBar} = value
        return (
          <Nav isDark={isDark}>
            <Link to="/" className="link">
              <Logo
                alt="website logo"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
              />
            </Link>
            <NavOptions>
              <Btn onClick={changeTheme} data-testid="theme">
                {isDark ? (
                  <FiSun size="28" color="#ffffff" />
                ) : (
                  <FaMoon size="28" />
                )}
              </Btn>

              <User
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={<LogoutBtn isDark={isDark}>Logout</LogoutBtn>}
                {...{
                  overlayStyle,
                  arrowStyle,
                }}
              >
                {close => (
                  <>
                    <PopupContainer isDark={isDark}>
                      <PopupText isDark={isDark}>
                        Are you sure you want to logout
                      </PopupText>
                      <BtnContainer>
                        <CancelBtn type="button" onClick={() => close()}>
                          Cancel
                        </CancelBtn>
                        <PopupBtn onClick={onLogout} type="button">
                          Confirm
                        </PopupBtn>
                      </BtnContainer>
                    </PopupContainer>
                  </>
                )}
              </Popup>
            </NavOptions>
            <NavOptionsMobile>
              <Btn onClick={changeTheme} data-testid="theme">
                {isDark ? (
                  <FiSun size="25" color="#ffffff" />
                ) : (
                  <FaMoon size="25" />
                )}
              </Btn>
              <Hamberg type="button" onClick={onMobileSideBar} isDark={isDark}>
                {mobileSideBar ? (
                  <FaRegWindowClose size="25" />
                ) : (
                  <GiHamburgerMenu size="25" />
                )}
              </Hamberg>
              <Popup
                modal
                trigger={
                  <Btn type="button">
                    {isDark ? (
                      <FiLogOut size="25" color="#ffffff" />
                    ) : (
                      <FiLogOut size="25" />
                    )}
                  </Btn>
                }
                {...{
                  overlayStyle,
                  arrowStyle,
                }}
              >
                {close => (
                  <>
                    <PopupContainer isDark={isDark}>
                      <PopupText isDark={isDark}>
                        Are you sure, you want to logout?
                      </PopupText>
                      <BtnContainer>
                        <CancelBtn type="button" onClick={() => close()}>
                          Cancel
                        </CancelBtn>
                        <PopupBtn onClick={onLogout} type="button">
                          Confirm
                        </PopupBtn>
                      </BtnContainer>
                    </PopupContainer>
                  </>
                )}
              </Popup>
            </NavOptionsMobile>
          </Nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
