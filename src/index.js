import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <Comment
          author='Sam'
          date='2:30PM'
          text='Sam I am'
          picture={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author='Samantha'
          date='4:40PM'
          text='I suck balls'
          picture={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author='Adrian'
          date='4:20AM'
          text='U need some photovoltaic?'
          picture={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
