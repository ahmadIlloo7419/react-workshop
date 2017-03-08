/**
 * Created by ahmad on 3/1/2017.
 */
import React from 'react';
import RegisterField from './RegisterField';

export default class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state = {
            formValue : {}
        };
        //
        this.saveInputs = this.saveInputs.bind(this);
    }
    saveInputs(event){
        const data = {[event.target.id]:event.target.value};
        this.setState(
            {
                formValue:Object.assign({},this.state.formValue,data)
            }
        );
    }
    render(){
        return(
            <div>
                <RegisterField
                    label="first name :"
                    id="firstName"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="last name :"
                    id="lastName"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="age :"
                    id="age"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="address :"
                    id="address"
                    onChange={this.saveInputs}/>
                <RegisterField
                    label="phone :"
                    id="phone"
                    onChange={this.saveInputs}/>

                {JSON.stringify(this.state.formValue)}

            </div>
        )
    }
}
