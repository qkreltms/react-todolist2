import React from "react";
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    paper: {
        margin: theme.spacing.unit * 2
    }
})

const TodoItem = ({ todo, deleteTodo, classes }) => {
    //onClick을 arrow function onClick시 this가 해당 태그가 됨 그러므로 arrow를 써서 상위 영역을 가리키게함
    return (
        <Grid item xs>
            <Paper className={classes.paper}>
                <Typography noWrap onClick={() => {deleteTodo(todo.id)}}>
                    {todo.todo}
                </Typography>
            </Paper>
        </Grid>
    )
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        todo: PropTypes.string,
        deleteTodo: PropTypes.func
    }),
    classes: PropTypes.object.isRequired
}

TodoItem.defaultProps = {
    todo: PropTypes.shape({
        id: 0,
        todo: '',
        deleteTodo: () => console.warn('deleteTodo is not defined')
    }),
  classes: () => console.warn('classes is not defined')
}

export default withStyles(styles)(TodoItem)
