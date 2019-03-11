import React, {Component} from 'react';
import uuid from 'uuid';
import CalendarDisplayContent from "./CalendarDisplayContent";

class CalendarDisplayContentRow extends Component {
    render() {

        const c = this.props.contents.map(content => {
            const todayStyle = this.props.currentDay!==content || !this.props.isCurrentMonth ?' ':'calendar-today ';
            const nonEmptyStyle = content!==''?'calendar-item flat-btn item select-able':'calendar-item flat-btn item';
            return(
                <CalendarDisplayContent
                    className={todayStyle+nonEmptyStyle}
                    key={uuid.v4()}
                    value={content}
                    selectDate={this.props.selectDate}/>
            );
        });

        return (
            <div
                className={'calendar-container'}>
                {c}
            </div>
        );
    }
}

export default CalendarDisplayContentRow;