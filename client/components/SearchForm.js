import React, {Component} from 'react'
import Axios from 'axios';
import {connect} from 'react-redux'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      taskName: '',
      assignee: ''
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
        <label htmlFor="taskName">Task Name:</label>
        <input type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange}/>

        <label htmlFor="assignee">Assignee:</label>
        <input type="text" name="assignee" value={this.state.assignee} onChange={this.handleChange}/>

        <button type="submit">Submit</button>
      </form>
    )
  }
}