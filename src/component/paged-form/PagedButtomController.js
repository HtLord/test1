import React, {Component} from 'react';

class PagedButtomController extends Component {

    render() {
        return (
            <div
                className={'container'}>
                <p
                    className={'calendar-10u-item'}> </p>
                <div
                    className={'container bg-dark-red top-gap border round-border click-able'}
                    onClick={this.props.submit}>
                    <p
                        className={'gap-round-3 color-white'}
                        >{!this.props.isLast()?'Next step':'Submit'}</p>
                </div>
            </div>
        );
    }
}

export default PagedButtomController;