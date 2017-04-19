import React from 'react';

export default class Slider extends React.Component {
    constructor(){
        super();
        this.state = {
            statements: [
                "hi:",
                "my",
                "name",
                "is",
                "ahmad"
            ],
            counter: 0
        };
        this.changeCounter = this.changeCounter.bind(this);
    }
    componentDidMount(){
        this.changeCounter();
    }
    componentDidUpdate(){
        this.changeCounter();
    }
    changeCounter(){
        setTimeout(()=>{
            this.setState(
                {
                    counter: this.state.counter<this.state.statements.length?this.state.counter+1:0
                }
            );
        },1000);
    }
    makeStatements(){
        let currentStatement ="";
        for(let i=0;i<this.state.counter;i++){
            currentStatement+= " "+this.state.statements[i];
        }
        return currentStatement;
    }
    render() {
        return (
            <div>
                {
                   this.state.counter==0?<br/>:this.makeStatements()
                }
            </div>
        );
    }
} 