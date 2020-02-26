import React, { Component } from 'react';

import './Comment.css';

import avatar from '../../assets/filipe.jpg';

class Comment extends Component {
  render() {
    const { data: comment } = this.props;

    return (
      <li className='comment'>
        <div className='user'>
          <img src={comment.author.avatar} alt='' />
        </div>

        <div className='commentContent'>
          <p>
            <a href=''>{comment.author.name}</a> {comment.content}
          </p>
        </div>
      </li>
    );
  }
}

export default Comment;
