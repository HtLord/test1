import React, {Component} from 'react';
import CalendarVariables from "./CalendarVariables";
import CalendarTextResult from "./CalendarTextResult";
import CalendarBoardResult from "./CalendarBoardResult";

class Calendar extends Component {

    //TODO: If comment is add into selected date.

    en_NameOfWeekday = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    zh_NameOfWeekday = ['日', '一', '二', '三', '四', '五', '六'];
    jp_NameOfWeekday = ['日', '月', '火', '水', '木', '金', '土'];

    en_NameOfMonth = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    zh_NameOfMonth = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

    dayOfMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];

    state = {
        year: 2000,
        month: 1,
        day: 1,
        today: 1,
    }

    negativeMod = (n, base) => {
        console.log(`Negative value ${n} mod ${base}`);
        if( n > 0 || base < 0 ){
            console.error('n must less than 0, base must great than 0.');
            return 0;
        }
        return (n+Math.ceil(Math.abs(n)/base)*base)%base;
    }

    isLeapYear = (year) => {
        if(year%400===0){
            console.log('leap');
            return true;
        }else{
            if(year%4===0 && year%100!==0){
                console.log('leap');
                return true;
            }
        }
        console.log('no leap');
        return false;
    }

    dayOfTheWeekByZellerAlog = (o) => {
        console.log('Doing Zeller\'s algorithm.');

        const { year, month, day } = o;
        console.log(`o: ${day}, ${month}, ${year}`);
        // console.log(`o: ${typeof day}${day}, ${typeof month}${month}, ${typeof year}${year}`);

        const shiftedMonth = [0,11,12,1,2,3,4,5,6,7,8,9,10];

        const d = day;
        const m = shiftedMonth[month];
        const c = Math.trunc(year/100);
        const y = month!==1 && month!==2 ?(year-c*100):(year-c*100)-1;
        console.log(`s: ${d}, ${m}, ${y}, ${c}`);
        // console.log(`s: ${typeof d}${d}, ${typeof m}${m}, ${typeof y}${y}, ${typeof c}${c}`);
        const factorOfMonth = Math.floor((13*m-1)/5);
        const factoryOfYear = Math.floor(y/4)+y;
        const factorOfCentury = Math.floor(c/4)-(2*c);
        console.log(`factors: ${d}, ${factorOfMonth}, ${factoryOfYear}, ${factorOfCentury}`);

        const n = d+Math.floor((13*m-1)/5)+Math.floor(y/4)+y+Math.floor(c/4)-(2*c);
        console.log(`n: ${n}`);
        // const n = d+factorOfMonth+factoryOfYear+factorOfCentury;
        // const w = n > 0 ? n : (n+7)%7;
        const w = n>0 ? n%7 : this.negativeMod(n, 7);
        console.log(`w: ${w}`);

        return w;
    }

    dayOfTheWeekByDateObject = () => {
        const d = new Date(`${this.state.year} ${this.state.month} ${this.state.day}`);
        return d.getDay();
    }

    modifyDate = (name, value) => {
       this.setState({
           [name]: value
       })
    }

    preMonth = (e) => {
        e.preventDefault();
        this.setState({
            year: this.state.month !== 1 ?this.state.year:this.state.year-1,
            month: this.state.month !== 1 ?this.state.month-1:12,
        })
    }

    nextMonth = (e) => {
        e.preventDefault();
        this.setState({
            year: this.state.month !== 12 ?this.state.year:this.state.year+1,
            month: this.state.month !== 12 ?this.state.month+1:1,
        })
    }

    selectDate = (e) => {
        const selectedDate = `${this.state.year}/${this.state.month}/${e.target.value}`;
        console.log(selectedDate);
        this.setState({
           selectedDate: selectedDate,
        });
    }

    componentDidMount() {
        const d = new Date();
        this.setState({
            year: d.getFullYear(),
            month: d.getMonth()+1,
            day: 1,
            currentDay: d.getDate(),
            currentMonth: d.getMonth()+1,
            selectedDate: 'none',
        })
    }

    componentWillUnmount() {
        this.setState({});
    }

    render() {
        const { year, month, day } = this.state;
        return (
            <div style={{'margin': '20px 20px 0 20px'}}>
                <CalendarBoardResult
                    year={year}
                    month={month}
                    weekday={this.dayOfTheWeekByZellerAlog(this.state)}
                    isLeapYear={this.isLeapYear(year)}
                    nameOfWeekday={this.zh_NameOfWeekday}
                    nameOfMonth={this.zh_NameOfMonth}
                    dayOfMonth={this.dayOfMonth[month]}
                    preMonth={this.preMonth}
                    nextMonth={this.nextMonth}
                    currentDay={this.state.currentDay}
                    currentMonth={this.state.currentMonth}
                    selectDate={this.selectDate}/>
                <div
                    className={'calendar-container container-gap'}>
                    <CalendarVariables
                        year={year}
                        month={month}
                        day={day}
                        modifyDate={this.modifyDate}/>
                    <CalendarTextResult
                        year={year}
                        month={month}
                        day={day}
                        nameOfWeekday={this.zh_NameOfWeekday}
                        weekday={this.dayOfTheWeekByDateObject(this.state)}
                        isLeapYear={this.isLeapYear(this.state.year)}
                        selectedDate={this.state.selectedDate}/>
                </div>
            </div>
        );
    }
}

export default Calendar;