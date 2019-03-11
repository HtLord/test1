import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title){
            alert('Must type todo title.');
            return false;
        }
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                style={{ display: 'flex'}}>
                <input
                    type={'text'}
                    name={'title'}
                    placeholder={'Add Todo ...'}
                    style={addTodoStyle}
                    value={this.state.title}
                    onChange={this.onChange}/>
                <input
                    className={'btn'}
                    type={'submit'}
                    value={'Submit'}
                    style={submitBtnStyle}/>
            </form>
        );
    }
}

const addTodoStyle = {
    flex: '10',
    padding: '5px',
    margin: '3px 0 3px 10px',
}

const submitBtnStyle = {
    flex: '1',
    display: 'inline-block',
    border: 'none',
    background: '#FE5B68',
    margin: '3px 10px 3px 0',
}
export default AddTodo;