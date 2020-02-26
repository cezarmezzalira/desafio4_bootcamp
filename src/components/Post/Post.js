import React, { Component } from 'react';
import avatar from '../../assets/diego.jpg';

import Comment from '../Comment/Comment';

import './Post.css';

class Post extends Component {
  render() {
    const { data: post } = this.props;

    return (
      <li className='post'>
        <div className='content'>
          <div className='user'>
            <img src={post.author.avatar} alt='' />
            <div className='userinfo'>
              <a href=''>{post.author.name}</a>
              <span>{post.date}</span>
            </div>
          </div>
          <div className='post'>
            <p>{post.content}</p>
          </div>
          <div className='comments'>
            <ul>
              {post.comments.map(comment => (
                <Comment key={comment.id} data={comment} />
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Post;
