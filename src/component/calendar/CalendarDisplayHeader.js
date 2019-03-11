import React, {Component} from 'react';
import uuid from 'uuid';
import CalendarDisplayContent from "./CalendarDisplayContent";

class CalendarDisplayHeader extends Component {
    render() {

        const c = this.props.contents.map(content => {
            return(
                <CalendarDisplayContent
                    className={'calendar-item title flat-btn'}
                    key={uuid.v4()}
                    value={content}/>
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

export default CalendarDisplayHeader;