import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  RightContainer,
  FailureHeading,
  FailurePara,
} from './StyledComponent'

const NotFound = () => {
  const renderNotFound = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <div className="failure">
            <img
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="failure view"
              className="img"
            />
            <FailureHeading isDark={isDark}>Page Not Found</FailureHeading>
            <FailurePara isDark={isDark}>
              We are sorry, the page you requested could not be found
            </FailurePara>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <>
            <Header />
            <HomeContainer>
              <SideBar />
              <RightContainer isDark={isDark}>
                {renderNotFound()}
              </RightContainer>
            </HomeContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NotFound
