import React from 'react';
import request from 'superagent';
var mock = require('superagent-mocker')(request);
import CommentItem from './CommentItem';
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
        this.state = {
            comments:[]
        }
    }
    componentDidMount(){
        //const self =this;
        request
            .get('/comments')
            .end((err, data) => {
                this.setState({comments:data.comments});
                console.log(data); // { id: 1, content: 'Hello World', headers: { 'x-custom-header': 'value of header' } }
            })
        ;
    }
    render() {
        return (
            <div>
                {
                    this.state.comments.map(
                        (comment,counter)=>{
                            return (
                              <CommentItem
                                    key={`commentItemNo__${counter}`}
                                    data={comment}/>
                            );
                        }
                    )
                }
            </div>
        );
    }
} 