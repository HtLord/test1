import React, {Component} from 'react';
import uuid from 'uuid';
import FormInput from "./FormInput";

class FormAcct extends Component {
    inputPara = [
        {name: 'email', desc: 'Email'},
        {name: 'password', desc: 'Password', type: 'password'},
    ]

    generateFormInput = () => {
        return this.inputPara.map( paraObj => {
            return (
                <FormInput
                    key={uuid.v4()}
                    type={paraObj.type}
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

export default FormAcct;