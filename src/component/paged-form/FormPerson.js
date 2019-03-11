import React, {Component} from 'react';
import uuid from 'uuid';
import FormInput from "./FormInput";

class FormPerson extends Component {

    // onChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    //     this.props.storeFormValue(this.state)
    //
    // }

    inputPara = [
        {name: 'fname', desc: 'First Name'},
        {name: 'lname', desc: 'Last Name'},
        {name: 'ssid', desc: 'SSID'},
        {name: 'country', desc: 'Country'},
        {name: 'city', desc: 'City'},
        {name: 'addr1', desc: 'Address Line1'},
        {name: 'addr2', desc: 'Address Line2'},
    ]

    generateFormInput = () => {
        return this.inputPara.map( paraObj => {
            return (
                <FormInput
                    key={uuid.v4()}
                    name={paraObj.name}
                    value={this.props.formValue[paraObj.name]}
                    desc={paraObj.desc}
                    storeFormValue={this.props.storeFormValue}
                    />
            )
        })
    }

    render() {
        return (
            <div>
                {this.generateFormInput()}
            </div>
        );
    }
}

export default FormPerson;