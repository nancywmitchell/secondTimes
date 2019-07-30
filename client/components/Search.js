import React, {Component} from 'react'
import Axios from 'axios'
import SearchForm from './SearchForm'
import ItemCard from './ItemCard'

export default class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {  
          items: ''
        }

        // this might not be necessary
        this.addStuff = this.addStuff.bind(this)  
    
      }

    addStuff = (stuff) => {
        let newStuff
        if (this.state.items) {
            newStuff = this.state.items.concat(stuff)
        }
        else newStuff = stuff
        this.setState({items: newStuff})
    }

    render() {
        if (!this.state.items) {
            return (
                <div>
                <SearchForm addStuff={this.addStuff}/>
                </div>
            )
        }
        else {
            console.log('returned items is ', this.state.items)
            return (
            <div>
                <SearchForm addStuff={this.addStuff}/>
                {this.state.items.map(item => (
                    <ItemCard item={item}/>
                ))}
            </div>
        )
        }
    }


}