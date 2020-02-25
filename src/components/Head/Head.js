import React, { Component } from 'react';

import './Head.css';

import logosvg from '../../assets/facebook.svg';

class Head extends Component {
  render() {
    return (
      <div class='header'>
        <img src={logosvg} />
        <a href=''>Meu Perfil</a>
      </div>
    );
  }
}

export default Head;
