import React, { Component } from 'react';

import ProfileImg from '../ProfileImg/ProfileImg';

class Post extends Component {
  render() {
    const { data } = this.props;

    return (
      <li className='post'>
        {console.log(data)}

        <div className='user'>
          <ProfileImg name={data.author.avatar} />
          <a href=''>{data.author.name}</a>
        </div>

        <div className='content'>
          <strong>{data.date}</strong>
          <p>{data.content}</p>
        </div>

        <ul></ul>
      </li>
    );
  }
}

export default Post;
