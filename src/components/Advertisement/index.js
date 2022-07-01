import {GrFormClose} from 'react-icons/gr'
import {
  AddContainer,
  Logo,
  AddText,
  GetButton,
  InfoCon,
  CloseBtn,
} from './StyledComponent'

const Advertisement = props => {
  const {close} = props
  const closeBtn = () => {
    close()
  }

  return (
    <AddContainer data-testid="banner">
      <InfoCon>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <AddText>Buy Nxt Watch Premium prepaid plans with UPI</AddText>
        <GetButton>GET IT NOW</GetButton>
      </InfoCon>
      <CloseBtn data-testid="close" type="button" onClick={closeBtn}>
        <GrFormClose size="30" />
      </CloseBtn>
    </AddContainer>
  )
}

export default Advertisement
