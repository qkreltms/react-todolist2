import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      margin: 'auto',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    }
})

class AddTodo extends Component {
    state = {
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
        const { classes } = this.props
        return (
            <form onSubmit={this.handleOnSubmit}>
                <Paper elevation={1} className={classes.root}>
                    <FormattedMessage id='add-todo-here'>
                        {msg => (
                            <InputBase 
                            className={classes.input}
                            placeholder={msg}
                            type='text' 
                            onChange={this.setContent} 
                            value={this.state.content}
                            />                    
                        )}
                    </FormattedMessage>
                </Paper>
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func,
    classes: PropTypes.object.isRequired
}

AddTodo.defaultTypes = {
    addTodo: () => console.warn('addTodo is not defined'),
    classes: () => console.warn('classes is not defined')
}

export default withStyles(styles)(AddTodo)