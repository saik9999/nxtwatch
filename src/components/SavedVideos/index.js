import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  TrendingContainer,
  MainContainer,
  IconCon,
  IconContainer,
  TrendingText,
  TrendingVideoCon,
  FailureHeading,
  FailurePara,
} from './StyledComponent'

const ActiveId = 'SAVED'

const SavedVideos = () => {
  const renderNoVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <div className="failure">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt="no saved videos"
              className="img"
            />
            <FailureHeading isDark={isDark}>
              No saved video found
            </FailureHeading>
            <FailurePara isDark={isDark}>
              You can save your videos while watching them
            </FailurePara>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value
        const saved = savedVideos.length === 0

        return (
          <>
            <Header />
            <MainContainer>
              <SideBar ActiveId={ActiveId} />
              <TrendingContainer
                data-testid="savedVideos"
                isDark={value.isDark}
              >
                {saved ? (
                  renderNoVideos()
                ) : (
                  <>
                    <IconContainer isDark={isDark}>
                      <IconCon isDark={isDark}>
                        <BiListPlus color="#ff0000" size="30" />
                      </IconCon>
                      <TrendingText isDark={isDark}>Saved Videos</TrendingText>
                    </IconContainer>
                    <TrendingVideoCon>
                      {savedVideos.map(each => (
                        <TrendingVideoItem key={each.id} videoDetails={each} />
                      ))}
                    </TrendingVideoCon>
                  </>
                )}
              </TrendingContainer>
            </MainContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
