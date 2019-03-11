import React, {Component} from 'react';
import uuid from 'uuid';
import FormInput from "./FormInput";

class FormScooter extends Component {
    inputPara = [
        {name: 'model', desc: 'Model'},
        {name: 'license', desc: 'License'},
        {name: 'lid', desc: 'License Issuing Date'},
        {name: 'brand', desc: 'Brand'},
        {name: 'pmd', desc: 'Product Manufacture Date'},
        {name: 'vin', desc: 'Vehicle Identification Number'},
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

export default FormScooter;