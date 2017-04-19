import React from 'react';

export default class BeforeRouter extends React.Component {
    constructor(){
        super();
        this.state = {
            currentcmp: "A"
        };
        //this.callcmp = this.callcmp.bind(this);
    }
    callcmp(cmpName){
        this.setState({currentcmp:cmpName});
    }
    render() {
        return (
            <div>
                <button onClick={this.callcmp.bind(this, "A")}>call component a</button>
                <button onClick={this.callcmp.bind(this, "B")}>call component b</button>
                {
                    // div app
                    React.createElement(require(`./${this.state.currentcmp}`).default)
                }
            </div>
        );
    }
} 