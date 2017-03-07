/**
 * Created by ahmad on 3/1/2017.
 */
import React from 'react';
import RegisterField from './RegisterField';

export default class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state = {
            formValue : ""
        };
        //
        this.saveInputs = this.saveInputs.bind(this);
    }
    saveInputs(event){
        this.setState({formValue:event.target.value});
    }
    render(){
        return(
            <div>
                <RegisterField
                    label="first name :"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="last name :"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="age :"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="address :"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="phone :"
                    onChange={this.saveInputs}/>

                {this.state.formValue}

            </div>
        )
    }
}
