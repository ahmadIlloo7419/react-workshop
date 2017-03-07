/**
 * Created by ahmad on 3/1/2017.
 */
import React from 'react';

export default class RegisterField extends React.Component {
    render(){
        return(
            <div>
                <label>{this.props.label}</label>
                <input
                    type="text"
                    placeholder={this.props.label}
                    onChange={this.props.onChange}/>
            </div>
        )
    }
}