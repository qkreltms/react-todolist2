import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
class AddTodo extends Component {
    state= {
        content: ''
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.content)
        this.setState({
            content: '' 
        })
    }

    setContent = (e) => {
        this.setState({
            content: e.target.value 
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label> <FormattedMessage id='add-todo-here' /> </label>
                <input type="text" onChange={this.setContent} value={this.state.content}></input>
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func
}

AddTodo.defaultTypes = {
    addTodo: () => console.warn('addTodo is not defined')
}

export default AddTodo