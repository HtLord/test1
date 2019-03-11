import React, {Component} from 'react';
import CalendarDisplayContentRow from "./CalendarDisplayContentRow";
import CalendarDisplayController from "./CalendarDisplayController";
import CalendarDisplayHeader from "./CalendarDisplayHeader";

class CalendarBoardResult extends Component {

    generateDayOfMonthOfCalendar = () => {
        var currentDay = 0;
        const initDayOfMonth = Array(42).fill('');
        const dayOfMonth = [...initDayOfMonth].map((v, index) => {
            if(index >= this.props.weekday && currentDay < this.props.dayOfMonth){
                currentDay++;
                return currentDay;
            }else{
                return v;
            }
        });

        console.log(this.props.dayOfMonth, dayOfMonth);
        return dayOfMonth;
    }

    render() {
        return (
            <div>
                <CalendarDisplayController
                    year={this.props.year}
                    month={this.props.month}
                    nameOfMonth={this.props.nameOfMonth}
                    preMonth={this.props.preMonth}
                    nextMonth={this.props.nextMonth}/>
                <CalendarDisplayHeader
                    contents={this.props.nameOfWeekday}/>
                <CalendarDisplayContentRow
                    currentDay={this.props.currentDay}
                    isCurrentMonth={this.props.month === this.props.currentMonth}
                    contents={this.generateDayOfMonthOfCalendar()}
                    selectDate={this.props.selectDate}/>
            </div>
        );
    }

}

export default CalendarBoardResult;