import React, {Component} from 'react';

class TestDb extends Component {

    state = {
        contents: {}
    }

    dbGet = async () => {
        await fetch('http://localhost:5438/testDB', {
            mode: "cors"
        }).then( res => {
            res.json()
            console.log(res.body)
        }).then( data => {
            console.log(data)
        })
    }

    dbPost = async () => {
        const data = JSON.stringify({"hello": "world"})
        await fetch('http://localhost:5438/testDB', {
            method: "POST",
            body: data
        }).then( res => {
            console.log(res.text())
        })
    }

    async componentDidMount(){
        this.dbPost()
    }

    render() {
        return (
            <div>
                <p>Hell Yeah</p>
            </div>
        );
    }
}

export default TestDb;