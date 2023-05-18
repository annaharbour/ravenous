import React, {useState} from "react";
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
    
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSortByChange = this.handleSortByChange.bind(this)

    this.sortByOptions = {
        "Best Match" : "best_match",
        "Highest Rated" : "rating",
        "Most Reviewed" : "review_count"
    }
}
     

    getSortByClass  (sortByOption)  {
        if (this.state.sortBy === sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }

   renderSortByOptions = () => {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
        let sortByOptionValue = this.sortByOptions[sortByOption]
        return (
            <li 
                className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
            >
                {sortByOption}
            </li>
        )
    })
   }

   handleSortByChange (sortByOption) {
        this.setState({sortBy: sortByOption})
}

    handleTermChange (e) {
        this.setState({ term: e.target.value })
   }

   handleLocationChange(e) {
    this.setState({ location: e.target.value })
   }

    handleSearch (e) {
        e.preventDefault()
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    }

    render(){
        return ( 
            <div className="search-bar">
                <div className="search-bar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div> 
                <div className="search-bar-fields">
                    <input
                        placeholder="Search Businesses"
                        onChange={this.handleTermChange}
                        
                    />
                    <input
                        placeholder="Where?"    
                        onChange={this.handleLocationChange}
                        
                    />              
                </div>
                
                <div className="search-bar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default SearchBar