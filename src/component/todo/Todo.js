import React, { Component } from 'react';
import uuid from 'uuid';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import LocalTodoData from '../../resource/LocalTodoData'

class Todo extends Component {

    //TODO: Record new todo into fs.
    //TODO: Add check all todo.
    //TODO: Remove todo from list by checked todo.
    //TODO: Modularize and make multi-layer todo.

    state = {
        todos: []
    }

    componentDidMount() {
        //Load data from locale file
        this.setState({
            todos: [...LocalTodoData],
        })

        //Load data from fake db API from https://jsonplaceholder.typicode.com/
        //And thanks.
        // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        //     .then(res => res.json())
        //     .then(data => this.setState({
        //         todos: [...data]
        //     }));
    }

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    console.log(`Do toggle ${id} from todos`);
                    todo.completed  = ! todo.completed
                }
                return todo;
            })
        })
    }

    removeTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter( todo => todo.id !== id )]
        })
        console.log(`Do remove ${id} from todos`);
    }

    addTodo = (title) => {
        var newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
        console.log('Add new todo');
        console.log(newTodo);
    }

    render() {
        return (
            <div>
                <AddTodo
                    addTodo={this.addTodo}/>
                <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    removeTodo={this.removeTodo}/>
            </div>
        );
    }
}

export default Todo;
