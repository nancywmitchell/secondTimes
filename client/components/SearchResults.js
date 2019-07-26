import React, {Component} from 'react'
import Axios from 'axios'

export default class ParentComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
          items: ''
        }  
    
      }

    render() {
        return (
            <div>Search Results Will Go Here!</div>
        )
    }


}