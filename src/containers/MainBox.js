import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentButton: "profile"
  }

  toggleCurrentButton = (currentButton) => {
    this.setState({
      currentButton
    })
  }


  renderContent = () => {
    if (this.state.currentButton === "profile"){
      return(<Profile />)
    }
    else if (this.state.currentButton === "photo"){
      return(<Photos />)
    }
    else if (this.state.currentButton === "cocktail"){
      return(<Cocktails />)
    }
    else {
      return(<Pokemon />)
    }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar active={this.state.currentButton} toggleButton={this.toggleCurrentButton}/>
        {this.renderContent()}
      </div>
    )
  }

}

export default MainBox
