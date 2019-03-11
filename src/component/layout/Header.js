import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header  style={headerStyle}>
                <h1>
                    My Playground
                </h1>
                <Link to={'/todo'}>TodoList</Link> |
                <Link to={'/calendar'}>Calendar</Link> |
                <Link to={'/pagedForm'}>PagedForm</Link> |
                <Link to={'/testDB'}>TestDB</Link> |
                <Link to={'/about'}>About</Link> |
            </header>
        );
    }
}

const headerStyle = {
    background: '#1A5D63',
    color: '#ffffff',
    textAlign: 'center',
    padding:'10px'
}

export default Header;