import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import VideoItemDetails from './components/VideoItemDetails'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, mobileSideBar: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onMobileSideBar = () => {
    this.setState(prevState => ({mobileSideBar: !prevState.mobileSideBar}))
  }

  addToSaved = video => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, video],
    }))
  }

  removedFromSaved = id => {
    const {savedVideos} = this.state
    this.setState({savedVideos: savedVideos.filter(each => each.id !== id)})
  }

  render() {
    const {isSaved, isDark, mobileSideBar, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          savedVideos,
          isSaved,
          isDark,
          mobileSideBar,
          changeTheme: this.changeTheme,
          onMobileSideBar: this.onMobileSideBar,
          addToSaved: this.addToSaved,
          saveClick: this.saveClick,
          removedFromSaved: this.removedFromSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
