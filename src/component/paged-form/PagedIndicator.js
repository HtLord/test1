import React, {Component} from 'react';
import uuid from 'uuid';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import {IoMdRadioButtonOff} from 'react-icons/io';

class PagedIndicator extends Component {

    selectedDotStyle = () => {
        return {
            size: '12px',
            margin: '0 5px 0 0',
            background: '#FE5B68',
            borderRadius: '50%',
            color: '#FE5B68',
        }
    }

    unselectedDotStyle = () => {
        return {
            size: '12px',
            margin: '0 5px 0 0',
            background: '#D81E58',
            borderRadius: '50%',
            color: '#D81E58',
        }
    }

    generateContentDots = () => {
        const dots = this.props.contents.map( (c, index) => {
            return (
              <IoMdRadioButtonOff
                  className={'click-able'}
                  key={uuid.v4()}
                  index={index}
                  style={this.props.index !== index ?this.unselectedDotStyle():this.selectedDotStyle()}
                  onClick={this.props.moveTo}
                />
            );
        })
        return dots;
    }

    componentDidMount() {

    }

    render() {
        return (
            <div
                // className={'container bottom-gap container-gap full-width center-item'}>
                className={'container button-gap polar-align'} >
                <FaCaretLeft
                    className={'click-able btn'}
                    size={'30px'}
                    onClick={this.props.previous}/>
                {this.generateContentDots()}
                <FaCaretRight
                    className={'click-able btn'}
                    size={'30px'}
                    onClick={this.props.next}/>
            </div>
        );
    }

}

export default PagedIndicator;