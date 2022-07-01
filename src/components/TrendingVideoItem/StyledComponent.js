import styled from 'styled-components'

export const LiContainer = styled.li`
  list-style-type: none;
  width: 90%;
  display: flex;
  margin-bottom: 50px;
  @media screen and (max-width: 575px) {
    width: 100%;
    margin-bottom: 30px;
    display: initial;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    width: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 50%;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const VideoInfo = styled.div`
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 20px;
`

export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (min-width: 768px) {
    height: 0px;
    width: 0px;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    height: 0px;
    width: 0px;
  }
`

export const TitleCon = styled.div`
  width: 85%;
`

export const ViewsTimeCon = styled.div`
  display: flex;
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

export const Channel = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  margin-right: 5px;
  color: ${props => (props.isDark ? '#aaa' : '#606060')};
  font-family: 'Roboto';
`
