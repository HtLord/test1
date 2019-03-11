import React, {Component} from 'react';

class CalendarDisplayContent extends Component {
    render() {
        return (
            <input
                className={this.props.className}
                type={'button'}
                value={this.props.value}
                onClick={this.props.selectDate}/>
        );
    }
}

export default CalendarDisplayContent;