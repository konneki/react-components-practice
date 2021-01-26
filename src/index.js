import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <Comment
        author='Sam'
        date='2:30PM'
        text='Sam I am'
        picture={faker.image.image()}
      />
      <Comment
        author='Samantha'
        date='4:40PM'
        text='I suck balls'
        picture={faker.image.image()}
      />
      <Comment
        author='Olive'
        date='00:00AM'
        text='I like to pet pets'
        picture={faker.image.image()}
      />
      <Comment
        author='Adrian'
        date='4:20AM'
        text='U need some photovoltaic?'
        picture={faker.image.image()}
      />
      <Comment
        author='3Ds MAX'
        date='1:29AM'
        text='So u used alpha release previously? Nothing has changed, lol.'
        picture={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
