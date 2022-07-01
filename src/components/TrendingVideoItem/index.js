import {formatDistanceToNowStrict} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  LiContainer,
  Thumbnail,
  VideoInfo,
  ProfileImg,
  TitleCon,
  ViewsTimeCon,
  Title,
  Channel,
} from './StyledComponent'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const time = formatDistanceToNowStrict(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <LiContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfo>
                <ProfileImg src={profileImageUrl} />
                <TitleCon>
                  <Title isDark={isDark}>{title}</Title>
                  <Channel isDark={isDark}>{name}</Channel>
                  <ViewsTimeCon>
                    <Channel isDark={isDark}>{viewCount} views</Channel>
                    <Channel isDark={isDark}>•</Channel>
                    <Channel isDark={isDark}>{time} ago</Channel>
                  </ViewsTimeCon>
                </TitleCon>
              </VideoInfo>
            </LiContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem
