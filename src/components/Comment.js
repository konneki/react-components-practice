import React from 'react';

const Comment = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.picture} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Today at {props.date}</span>
        </div>
        <div className='text'>{props.text}</div>
      </div>
    </div>
  );
};

export default Comment;
