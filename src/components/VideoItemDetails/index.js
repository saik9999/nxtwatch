import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {AiFillDislike, AiFillLike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  RightContainer,
  VideoContainer,
  Title,
  Text,
  TitleCon,
  TimeLikesCon,
  TimeCon,
  LikeCon,
  LDText,
  Hr,
  ChannelContainer,
  ProfileImg,
  SubsCon,
  Channel,
  Subs,
  FailureHeading,
  FailurePara,
  RetryBtn,
  Btn,
  Like,
  DisLike,
  Save,
} from './StyledComponent'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    video: {},
    apiStatus: apiConstants.initial,
    isLike: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        video: updatedData,
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
    const {video, isLike, isDisLike} = this.state
    const {name, profileImageUrl, subscriberCount} = video.channel
    const {id, publishedAt, title, videoUrl, viewCount, description} = video
    const time = formatDistanceToNowStrict(new Date(publishedAt))

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, addToSaved, removedFromSaved, savedVideos} = value
          const videos = savedVideos.filter(each => each.id === id)
          const isSaved = videos.length === 1
          const adding = () => {
            if (isSaved) {
              removedFromSaved(id)
            } else {
              addToSaved(video)
            }
          }

          return (
            <>
              <VideoContainer>
                <ReactPlayer
                  height="100%"
                  width="100%"
                  url={videoUrl}
                  controls
                />
              </VideoContainer>
              <TitleCon>
                <Title isDark={isDark}>{title}</Title>
                <TimeLikesCon>
                  <TimeCon>
                    <Text isDark={isDark}>{viewCount} views</Text>
                    <Text isDark={isDark}>•</Text>
                    <Text isDark={isDark}>{time} ago</Text>
                  </TimeCon>
                  <LikeCon>
                    <Btn type="button" onClick={this.onClickLike}>
                      <Like isLike={isLike}>
                        <AiFillLike size="20" />
                        <LDText>Like</LDText>
                      </Like>
                    </Btn>
                    <Btn type="button" onClick={this.onClickDisLike}>
                      <DisLike isDisLike={isDisLike}>
                        <AiFillDislike size="20" />
                        <LDText>Dislike</LDText>
                      </DisLike>
                    </Btn>
                    <Btn type="button" onClick={adding}>
                      {isSaved ? (
                        <Save isSaved={isSaved}>
                          <BiListPlus size="20" />
                          <LDText>Saved</LDText>
                        </Save>
                      ) : (
                        <Save isSaved={isSaved}>
                          <BiListPlus size="20" />
                          <LDText>Save</LDText>
                        </Save>
                      )}
                    </Btn>
                  </LikeCon>
                </TimeLikesCon>
                <Hr />
                <ChannelContainer>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <SubsCon>
                    <Channel isDark={value.isDark}>{name}</Channel>
                    <Subs isDark={value.isDark}>
                      {subscriberCount} subscribers
                    </Subs>
                  </SubsCon>
                </ChannelContainer>
                <Channel isDark={value.isDark}>{description}</Channel>
              </TitleCon>
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

  onClickLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      isDisLike: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      isLike: false,
      isDisLike: !prevState.isDisLike,
    }))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => (
          <>
            <Header />
            <MainContainer>
              <SideBar />
              <RightContainer
                data-testid="videoItemDetails"
                isDark={value.isDark}
              >
                {this.renderAll()}
              </RightContainer>
            </MainContainer>
          </>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
