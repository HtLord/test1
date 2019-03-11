import React, {Component} from 'react';

class FormInput extends Component {

    state = {
        [this.props.name]: this.props.value,
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        // console.log(this.state)
    }

    handleOnBlur = () => {
        this.props.storeFormValue(this.state)
    }

    render() {
        return (
            <div>
                <p
                    className={this.props.descCSS}>
                    {this.props.desc}
                </p>
                <input
                    className={this.props.inputCSS}
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}/>
            </div>
        );
    }
}

export default FormInput;