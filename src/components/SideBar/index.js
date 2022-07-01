import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import TabItem from '../TabItem'
import ThemeContext from '../../context/ThemeContext'

import {
  SidebarContainer,
  Ul,
  ContactUsCon,
  Contact,
  MediaContainer,
  Logo,
  ContactUsText,
} from './StyledComponent'

const tabsList = [
  {
    tabId: 'HOME',
    displayText: 'Home',
    icon: () => <AiFillHome size="20" />,
    path: '/',
  },
  {
    tabId: 'TRENDING',
    displayText: 'Trending',
    icon: () => <HiFire size="20" />,
    path: '/trending',
  },
  {
    tabId: 'GAMING',
    displayText: 'Gaming',
    icon: () => <SiYoutubegaming size="20" />,
    path: '/gaming',
  },
  {
    tabId: 'SAVED',
    displayText: 'Saved videos',
    icon: () => <BiListPlus size="20" />,
    path: '/saved-videos',
  },
]

const SideBar = props => {
  const {ActiveId} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, mobileSideBar} = value
        return (
          <SidebarContainer isDark={isDark} mobileSideBar={mobileSideBar}>
            <Ul>
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  isActive={ActiveId === eachTab.tabId}
                />
              ))}
            </Ul>
            <ContactUsCon>
              <Contact isDark={isDark}>CONTACT US</Contact>
              <MediaContainer>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </MediaContainer>
              <ContactUsText isDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </ContactUsText>
            </ContactUsCon>
          </SidebarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SideBar
