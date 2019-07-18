import React, {Component} from 'react'
// import Axios from 'axios';
// import {connect} from 'react-redux'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      brand: '',
      description: ''
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
    //const addTodo = this.props.addTodo

    //const res = await Axios.post('/api/todos', this.state)

    //reset the form to be blank
    this.setState({
      taskName : '',
      assignee: ''
    })
  }


  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="description">What are you looking for?</label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>

        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange}/>

        

        <button type="submit">Submit</button>
      </form>
    )
  }
}