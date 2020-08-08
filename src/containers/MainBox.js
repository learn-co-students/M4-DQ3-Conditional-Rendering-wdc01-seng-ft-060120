import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    menuItem: "profile"
  }

  changeMenu = (category) => {
    this.setState({
      menuItem: category
    })
  }

  renderPages = () => {
    if (this.state.menuItem === 'profile') return <Profile/>
    if (this.state.menuItem === 'photos') return <Photos/>
    if (this.state.menuItem === 'cocktails') return <Cocktails/>
    if (this.state.menuItem === 'pokemon') return <Pokemon/>
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected.
    Which component should have state? Which component should have methods to control state?
    Where should these methods be called?

    */
    let detailsToDisplay

    return (
      <div>
        <MenuBar
         changeMenu={this.changeMenu}
         menuItem={this.state.menuItem}
        />
        {this.renderPages()}
      </div>
    )
  }

}

export default MainBox
