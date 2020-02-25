import React, { Component } from 'react';

import Post from '../Post/Post';

import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'user.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'diego.jpg'
            },
            content:
              'Estamos sempre de olho nas turmas e caso você já tenha concluído o Bootcamp, só me procurar!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'José da Silva',
          avatar: 'user.png'
        },
        date: '04 Jun 2019',
        content: 'Quando terá um novo bootcamp?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'diego.jpg'
            },
            content: 'Fica ligado, em breve abriremos as incrições!'
          },
          {
            id: 3,
            author: {
              name: 'Filipe Deschamps',
              avatar: 'filipe.jpg'
            },
            content:
              'Bora! Aproveita e participa comigo da Semana OmniStack! Vai ser massinha!'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className='postlist'>
        <ul>
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
