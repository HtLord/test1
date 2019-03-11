import React, {Component} from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaCheckSquare } from 'react-icons/fa';

class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed?'line-through':'none',
            backgroundColor: this.props.todo.completed?'#FEF0D5':'#00BEB2',
            borderBottom: '3px solid #ffffff',
            padding: '10px',
            margin: '0 10px 0 10px',
        }
    }

    checkIconStyle = () => {
        return {
            'margin': '0 15px 0 15px',
            'background': !this.props.todo.completed? '#ffffff':'#00BEB2'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <FaCheckSquare
                    style={this.checkIconStyle()}
                    />
                <input
                    style={checkBoxStyle}
                    id={`${id}Label`}
                    type='checkbox'
                    checked={this.props.todo.completed}
                    onChange={this.props.toggleTodo.bind(this, id)}/>
                <label
                    style={labelStyle}
                    htmlFor={ `${id}Label` }>{title}</label>
                <button
                    style={btnStyle}
                    onClick={this.props.removeTodo.bind(this, id)}>
                    <IoIosCloseCircle
                        alt={'remove todo'}
                        style={{ 'background': '#000000', 'borderRadius': '50%'}}
                        color={'red'}
                        size={'20px'}/>
                </button>

            </div>
        );
    }


}

const checkBoxStyle = {
    display: 'none',
    margin: '0 15px 0 15px',
}

const labelStyle = {
    cursor: 'pointer',
}

const btnStyle = {
    cursor: 'pointer',
    background: 'none',
    outline: 'none',
    border: 'none',
    float: 'right',
    margin: '0 5px',
}

export default TodoItem;
