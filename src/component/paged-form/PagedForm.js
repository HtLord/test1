import React, {Component} from 'react';
import PagedIndicator from "./PagedIndicator";
import FormPerson from "./FormPerson";
import FormAcct from "./FormAcct";
import FormScooter from "./FormScooter";
import PagedButtomController from "./PagedButtomController";

class PagedForm extends Component {
    //TODO: Add radio type input
    //TODO: Add text area type input
    //TODO: Add select type input
    //TODO: moveTO while click dots to trigger this function multiple times rapidly will cause e.target cant be found
    //May cause by latency of loading SVGs.

    state = {
        contents: [],
        selectedId: 0,
        index: 0,
        formValue: {},
        forms: [FormPerson, FormAcct, FormScooter],
    }

    generateContent = () => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=3')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    contents: [...data],
                    selectedId: data[0].id,
                })
            });

    }

    generateForms = () => {
        return React.createElement(this.state.forms[this.state.index], {});
    }

    preForm = (e) => {
        e.preventDefault();
        // console.log(this.state.index<this.state.forms.length-1?this.state.index+1:this.state.index)
        this.setState({
            index: this.state.index>0?this.state.index-1:this.state.index,
        })
    }

    nextForm = (e) => {
        e.preventDefault();
        // console.log(this.state.index<this.state.forms.length-1?this.state.index+1:this.state.index)
        this.setState({
            index: this.state.index<this.state.forms.length-1?this.state.index+1:this.state.index,
        })

    }

    moveTo = (e) => {
        e.preventDefault();
        // console.log(e.target)
        // console.log(e.target.attributes['index']?e.target.attributes['index'].nodeValue:e.target.attributes['index'])
        this.setState({
            index: Number(e.target.attributes['index']?e.target.attributes['index'].nodeValue:this.state.index),
        })
    }

    isLast = () => {
        return this.state.index === this.state.forms.length-1
    }

    submitForm = (o) => {

    }

    storeFormValue = (o) => {
        // console.log(o)
        const v = {...this.state.formValue, ...o}
        this.setState({
            formValue: v
        })
        // console.log(this.state)
    }

    componentDidMount(){
        // this.generateContent();
        this.generateForms();
    }

    componentWillUpdate(){
        this.generateForms();
    }

    render() {
        return (
            <div
                className={'col-container form-card'}>
                <PagedIndicator
                    contents={this.state.forms}
                    index={this.state.index}
                    previous={this.preForm}
                    next={this.nextForm}
                    moveTo={this.moveTo}/>
                {React.createElement(this.state.forms[this.state.index], {formValue: {...this.state.formValue}, storeFormValue: this.storeFormValue})}
                <PagedButtomController
                    isLast={this.isLast}
                    next={this.nextForm}
                    submit={this.submitForm}/>
            </div>
        );
    }
}

export default PagedForm;