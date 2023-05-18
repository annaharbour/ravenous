import React, {useState, useEffect} from "react";
import './App.css'
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { search } from '../utils/yelp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faIceCream } from "@fortawesome/free-solid-svg-icons";



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp(term, location, sortBy) {
    search(term, location, sortBy).then(businesses => {
      this.setState({businesses : businesses})
    })
  }

  componentDidMount(){
    this.searchYelp('pizza', 'Charlotte', 'best_match')
  }


    render(){
    return(
      <div className="App">
        <div className="header">
          <h1><FontAwesomeIcon icon={faUtensils} />
Ra<FontAwesomeIcon icon={faIceCream} />enous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
        </div>
       
        <BusinessList businesses={this.state.businesses}/>
      </div>
    )
  }
}

export default App;
