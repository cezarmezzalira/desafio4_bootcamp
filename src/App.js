import React from 'react';
import './App.css';

import logo from './assets/logo.png';
import logosvg from './assets/facebook.svg';

import Head from './components/Head/Head';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <>
      <Head />
      <div className='wrapper'>
        <PostList />
      </div>
    </>
  );
}

export default App;
