import React, { Component } from 'react';
import './App.css';
import Header from "./component/layout/Header";
import Calendar from "./component/calendar/Calendar";

import { StaticRouter as Router, Route } from 'react-router-dom';
import About from "./component/pages/About";
import Todo from "./component/todo/Todo";
import PagedForm from "./component/paged-form/PagedForm";
import TestDb from "./component/test-db/TestDB";

class App extends Component {

    //TODO: Find some can control output log to console.
    render() {
        return (
            <Router basement={'/Users/Huang/WebstormProjects/test1/build/'}>
                <div className="App">
                    <Header/>
                    <Route
                        exact
                        path={'/'}
                        render={ () =>
                            <React.Fragment>
                                <h1>Playground root not figure out what to put on yet.</h1>
                            </React.Fragment>
                        }>
                    </Route>
                    <Route
                        path={'./todo'}
                        component={Todo}>
                    </Route>
                    <Route
                        path={'/calendar'}
                        component={Calendar}>
                    </Route>
                    <Route
                        path={'pagedForm'}
                        component={PagedForm}>
                    </Route>
                    <Route
                        path={'testDB'}
                        component={TestDb}>
                    </Route>
                    <Route
                        path={'about'}
                        component={About}>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
