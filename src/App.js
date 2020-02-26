import React from 'react';
import './App.css';

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
