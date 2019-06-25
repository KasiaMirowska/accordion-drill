import React from 'react';
import './App.css';
import Accordion from './Accordion'

const tabSections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App(sections) {
  return (
    <div className="App">
      <Accordion sections={tabSections} /> 
    </div>
  );
}

export default App;
