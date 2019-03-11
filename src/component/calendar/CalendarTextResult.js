import React, {Component} from 'react';

class CalendarTextResult extends Component {

    render() {
        const { year, month, day } = this.props;
        return (
            <div
                className={'calendar-col-container  item-gap'}>
                <p>
                    Date: {year}/{month}/{day}</p>
                <p>
                    Weekday: {this.props.nameOfWeekday[this.props.weekday]}({this.props.weekday})</p>
                <p>
                    Leap year: {this.props.isLeapYear?"Yes":"No"}</p>
                <p>
                    Selected day: {this.props.selectedDate}</p>
            </div>
        );
    }
}
export default CalendarTextResult;