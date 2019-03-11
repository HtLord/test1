import React, {Component} from 'react';

class CalendarVariables extends Component {

    onChange = (e) => {
        e.preventDefault();
        this.props.modifyDate(e.target.name, Number(e.target.value));
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div
                className={'calendar-col-container half-width item-gap'}>
                <p>Year</p>
                <input
                    type={'number'}
                    name={'year'}
                    value={this.props.year}
                    onChange={this.onChange}/>
                <p>Month</p>
                <input
                    type={'number'}
                    name={'month'}
                    value={this.props.month}
                    onChange={this.onChange}/>
                <p>Day</p>
                <input
                    type={'number'}
                    name={'day'}
                    value={this.props.day}
                    onChange={this.onChange}/>
            </div>
        );
    }
}

export default CalendarVariables;