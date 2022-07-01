import Skeleton from '@mui/material/Skeleton'

import {LiContainer, ProfileCon, TextContainer} from './StyledComponent'

import ThemeContext from '../../context/ThemeContext'

const VideoSkeleton = () => (
  <ThemeContext>
    {value => {
      const {isDark} = value
      return (
        <LiContainer>
          <Skeleton
            sx={{bgcolor: isDark ? 'grey.900' : ''}}
            variant="rectangular"
            height={180}
            animation="wave"
          />
          <ProfileCon>
            <Skeleton
              sx={{bgcolor: isDark ? 'grey.900' : ''}}
              variant="circular"
              height={40}
              width={40}
              animation="wave"
            />
            <TextContainer>
              <Skeleton
                sx={{bgcolor: isDark ? 'grey.900' : ''}}
                variant="text"
                animation="wave"
                width="250px"
                height={25}
              />
              <Skeleton
                sx={{bgcolor: isDark ? 'grey.900' : ''}}
                variant="text"
                animation="wave"
                width="200px"
                height={25}
              />
            </TextContainer>
          </ProfileCon>
        </LiContainer>
      )
    }}
  </ThemeContext>
)

export default VideoSkeleton
