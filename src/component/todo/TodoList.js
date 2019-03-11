import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        return (
            this.props.todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={this.props.toggleTodo}
                    removeTodo={this.props.removeTodo}/>
            )
        )
    }
}

export default TodoList;