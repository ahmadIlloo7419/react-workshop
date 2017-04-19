import React from 'react';

export default class CommentItem extends React.Component {
    static propTypes = {
        data: React.PropTypes.object
    };
    render() {
        return (
            <div>
                <span>{this.props.data.date}</span>
                <span>{this.props.data.senderId}</span>
                <span>{this.props.data.body}</span>
            </div>
        );
    }
} 