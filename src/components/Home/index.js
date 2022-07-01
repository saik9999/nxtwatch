import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import VideoSkeleton from '../VideoSkeleton'
import Header from '../Header'
import Advertisement from '../Advertisement'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import {
  HomeContainer,
  RightContainer,
  VideoContainer,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  VideoUlContainer,
  FailureHeading,
  FailurePara,
  RetryBtn,
  SearchBtn,
} from './StyledComponent'
import './index.css'

const ActiveId = 'HOME'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [{}, {}, {}, {}, {}, {}],
    AddShow: true,
    searchInput: '',
    apiStatus: apiConstants.initial,
    loading: '',
  }

  componentDidMount() {
    this.gettingData()
  }

  gettingData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        videosList: updatedList,
        apiStatus: apiConstants.success,
        loading: false,
      })
      setTimeout(() => {
        this.setState({loading: true})
      }, 1500)
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onAddClose = () => {
    this.setState({AddShow: false})
  }

  onSearch = e => {
    this.setState({searchInput: e.target.value})
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

  renderNoResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <div className="failure">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="img"
            />
            <FailureHeading isDark={isDark}>
              No Search results found
            </FailureHeading>
            <FailurePara isDark={isDark}>
              Try different key words or remove search filter
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
    const {videosList} = this.state

    return (
      <VideoUlContainer>
        {videosList.map(each => (
          <VideoItem key={each.id} videoDetails={each} />
        ))}
      </VideoUlContainer>
    )
  }

  renderVideosSkeleton = () => {
    const {videosList} = this.state

    return (
      <VideoUlContainer>
        {videosList.map(each => (
          <VideoSkeleton key={each.id} videoDetails={each} />
        ))}
      </VideoUlContainer>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderVideosSkeleton()
      case apiConstants.failure:
        return this.renderFailure()
      case apiConstants.success:
        return this.renderVideos()
      default:
        return null
    }
  }

  onSearchClick = () => {
    this.gettingData()
  }

  render() {
    const {AddShow, videosList, mobileSideBar} = this.state
    const noResult = videosList.length === 0
    return (
      <ThemeContext.Consumer>
        {value => (
          <>
            <Header />
            <HomeContainer>
              <SideBar ActiveId={ActiveId} />
              <RightContainer
                data-testid="home"
                isDark={value.isDark}
                mobileSideBar={mobileSideBar}
              >
                {AddShow && (
                  <Advertisement data-testid="banner" close={this.onAddClose} />
                )}
                <VideoContainer isDark={value.isDark}>
                  <SearchContainer isDark={value.isDark}>
                    <SearchInput
                      onChange={this.onSearch}
                      placeholder="Search"
                      isDark={value.isDark}
                      type="search"
                    />
                    <SearchBtn
                      onClick={this.onSearchClick}
                      data-testid="searchButton"
                      type="button"
                    >
                      <SearchIconContainer isDark={value.isDark}>
                        <AiOutlineSearch size="22" color="#909090" />
                      </SearchIconContainer>
                    </SearchBtn>
                  </SearchContainer>
                  {this.renderAll()}
                  {noResult ? this.renderNoResults() : null}
                </VideoContainer>
              </RightContainer>
            </HomeContainer>
          </>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
