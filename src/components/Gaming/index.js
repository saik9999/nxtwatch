import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import GamingVideoItem from '../GamingVideoItem'

import {
  TrendingContainer,
  MainContainer,
  IconCon,
  IconContainer,
  TrendingText,
  TrendingVideoCon,
  FailureHeading,
  FailurePara,
  RetryBtn,
} from './StyledComponent'

const ActiveId = 'GAMING'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {gamingList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.gettingTrendingVideos()
  }

  gettingTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedList = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingList: updatedList,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0b37" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <div className="failure">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
              className="img"
            />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara isDark={isDark}>
              We are having some trouble to complete your request.
            </FailurePara>
            <FailurePara isDark={isDark}>Please try again.</FailurePara>
            <RetryBtn onClick={this.gettingData} type="button">
              Retry
            </RetryBtn>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideos = () => {
    const {gamingList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <IconContainer isDark={isDark}>
                <IconCon isDark={isDark}>
                  <SiYoutubegaming color="#ff0000" size="30" />
                </IconCon>
                <TrendingText isDark={isDark}>Gaming</TrendingText>
              </IconContainer>
              <TrendingVideoCon>
                {gamingList.map(each => (
                  <GamingVideoItem key={each.id} gamingDetails={each} />
                ))}
              </TrendingVideoCon>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailure()
      case apiConstants.success:
        return this.renderVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => (
          <>
            <Header />
            <MainContainer>
              <SideBar ActiveId={ActiveId} />
              <TrendingContainer data-testid="gaming" isDark={value.isDark}>
                {this.renderAll()}
              </TrendingContainer>
            </MainContainer>
          </>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
