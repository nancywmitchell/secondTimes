import React, {Component} from 'react'
import Axios from 'axios'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

export default class ParentComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
          items: ''
        }

        // this might not be necessary
        this.addStuff = this.addStuff.bind(this)  
    
      }

    addStuff = (stuff) => {
        this.setState({items: stuff})
    }

    render() {
        return (
            <div>
            <SearchForm addStuff={this.addStuff}/>
            <SearchResults />
            </div>
        )
    }


}