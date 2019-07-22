import React, {Component} from 'react'
import Axios from 'axios';
// import {connect} from 'react-redux'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      brand: '',
      description: '',
      size: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name] : event.target.value
    })

  }

  handleSubmit(event) {
    console.log('handling submit')
    console.log('state is now ', this.state)
    event.preventDefault()

    const search = this.state
    console.log('search is ', search)
    
    // the handle submit needs to call the backend route that asks for the web data
    // you're going to need axios and it's going to look something like this:
    // await Axios.post('/send', data)
    // except it will probably be a get route and not a post

    const data = Axios.post('/getItems', search)

    //reset the form to be blank
    this.setState({
      brand : '',
      description: '',
      size: ''
    })
  }


  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="description">What are you looking for?</label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>

        <label htmlFor="brand">Search by brand:</label>
        <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange}/>

        <label htmlFor="size">Search by size:</label>
        <input type="text" name="size" value={this.state.size} onChange={this.handleChange}/>

        

        <button type="submit">Submit</button>
      </form>
    )
  }
}