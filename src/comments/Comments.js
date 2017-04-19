import React from 'react';
import request from 'superagent';
var mock = require('superagent-mocker')(request);
mock.get('/comments', function(req) {
    return {
        comments: [
            {
                date: "206-01-02",
                "body":"hi",
                "senderId": 10
            }
        ]
    };
});

export default class Comments extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        request
            .get('/comments')
            .end(function(err, data) {
                console.log(data); // { id: 1, content: 'Hello World', headers: { 'x-custom-header': 'value of header' } }
            })
        ;
    }
    render() {
        return (
            <div>
                this is comment cmp
            </div>
        );
    }
} 