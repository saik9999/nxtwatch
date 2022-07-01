import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {GamingLi, GamingHead, GamingPara, GamingImg} from './StyledComponent'

const GamingVideoItem = props => {
  const {gamingDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingLi>
            <Link className="link" to={`/videos/${id}`}>
              <GamingImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingHead isDark={isDark}>{title}</GamingHead>
              <GamingPara isDark={isDark}>
                {viewCount} Watching Worldwide
              </GamingPara>
            </Link>
          </GamingLi>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
