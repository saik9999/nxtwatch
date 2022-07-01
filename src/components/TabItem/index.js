import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {TabButton, Li, Head} from './StyledComponent'

import './index.css'

const TabItem = props => {
  const {tabDetails, isActive} = props
  const {displayText, icon, path} = tabDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, onMobileSideBar} = value
        return (
          <Link className="link" to={path}>
            <Li isDark={isDark} isActive={isActive} onClick={onMobileSideBar}>
              <TabButton isDark={isDark} isActive={isActive}>
                {icon()}
                <Head isDark={isDark} isActive={isActive}>
                  {displayText}
                </Head>
              </TabButton>
            </Li>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TabItem
