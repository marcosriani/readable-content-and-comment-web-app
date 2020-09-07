import React from 'react';
import './Post.css';

const Post = () => {
  return (
    <div className='container-post'>
      <div className='container-vote'>
        <button className='plus'>+</button>
        <p>+2</p> <button className='minus'>-</button>
      </div>
      <div className='container-content'>
        <div>
          <h3>50 Things to Make With Bacon : Recipes and Cooking</h3>
        </div>
        <div className='container-content-detail'>
          <div className='container-content-category'>
            <div>
              <p>diet</p>
            </div>
            <div>
              <p>Comments 1</p>
            </div>
          </div>
          <div className='container-content-author'>
            <div>
              <p>Author</p>
            </div>
            <div>
              <p>14 Jul 2016, 8:02am</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-edit'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  );
};

export default Post;
