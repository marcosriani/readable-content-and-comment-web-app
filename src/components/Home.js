import React, { useState } from 'react';
import Post from './Post';

import './Home.css';

const Home = () => {
  return (
    <div className='container-home'>
      <h1>Readable - Content and Comment Web App</h1>
      <div className='secondary-menu'>
        <div className='all-categories'>
          <h2>All categories</h2>
          <div className='all-categories-btn'>
            <button>Sort By: Vote Score (desc)</button>
          </div>
        </div>
        <div className='explore'>
          <div>
            <p>Explore below the posts from this category.</p>
            <p> You can comment on an existing post or submit your own</p>
          </div>
          <button className='explore-btn'>+ Add New Post</button>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
