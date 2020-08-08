import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

    state = {
      selected: "profile"
    }

  handleChange = (selected) => {
    this.setState({
      selected: selected
    })
  }

  render() {
    let details;

    switch(this.state.selected){
      case "profile":
        details = <Profile />
      break;
      case "Photos":
        details = <Photos />
      break;
      case "Cocktail":
        details = <Cocktail />
      break;
      case "Pokemon":
        details = <Pokemon />
      break;
    }

    return (
      <div>
        <MenuBar onClick={this.state.handleChange} selected={this.state.selected}/>
        {details}
      </div>
    )
  }
}

export default MainBox
