import styled from 'styled-components'

export const LiContainer = styled.li`
  list-style-type: none;
  width: 32%;
  margin-bottom: 50px;
  @media screen and (max-width: 575px) {
    width: 100%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    width: 48%;
  }
`
export const ProfileCon = styled.div`
  display: flex;
  margin-top: 10px;
`

export const TextContainer = styled.div`
  margin-left: 5px;
`
