import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`

export const RightContainer = styled.div`
  width: 80%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 90vh;
  overflow-y: scroll;
  padding: 20px 20px;
  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const VideoContainer = styled.div`
  height: 600px;
  @media screen and (max-width: 576px) {
    height: 300px;
  }
`
export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => (props.isDark ? '#ffffff' : '#030303')};
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  @media screen and (max-width: 575px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    font-size: 18px;
  }
`

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  margin-right: 5px;
  color: ${props => (props.isDark ? '#aaa' : '#606060')};
  font-family: 'Roboto';
  display: flex;
  align-items: center;
`
export const Like = styled(Text)`
  margin-right: 20px;
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
`
export const DisLike = styled(Text)`
  margin-right: 20px;
  color: ${props => (props.isDisLike ? '#2563eb' : '#64748b')};
`
export const Save = styled(Text)`
  margin-right: 20px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const Btn = styled.button`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  cursor: pointer;
`

export const TitleCon = styled.div`
  padding-top: 20px;
  @media screen and (max-width: 576px) {
    padding: 20px 10px;
  }
`

export const TimeLikesCon = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const TimeCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const LikeCon = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const LDText = styled.span`
  margin-left: 5px;
  font-weight: 500;
`

export const Hr = styled.hr``

export const ChannelContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
`

export const SubsCon = styled.div`
  margin-left: 20px;
`

export const Channel = styled(Title)`
  font-size: 15px;
`

export const Subs = styled(Text)`
  font-size: 15px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 25px;
`
export const FailurePara = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  font-family: 'Roboto';
  font-size: 20px;
  margin: 3px;
  text-align: center;
`
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  color: #ffffff;
  border-width: 0px;
  margin-top: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`
