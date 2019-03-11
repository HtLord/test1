import React, {Component} from 'react';

class CalendarDisplayController extends Component {
    render() {
        return (
            <div
                className={'calendar-container title'}>
                <input
                    className={'calendar-1u-item flat-btn arrow-btn'}
                    type={'button'}
                    onClick={this.props.preMonth}
                    value={'<'}/>
                <p
                    className={'calendar-10u-item align-text-mid light-text'}>
                    {this.props.year}</p>
                <p
                    className={'calendar-10u-item align-text-mid light-text'}>
                    {this.props.nameOfMonth[this.props.month]}</p>
                <input
                    className={'calendar-1u-item flat-btn arrow-btn'}
                    type={'button'}
                    onClick={this.props.nextMonth}
                    value={'>'}/>
            </div>
        );
    }
}

export default CalendarDisplayController;