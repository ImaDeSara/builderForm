import React, { useState } from 'react';
import './App.css'

function App() {
  // Create separate states for each field
  const [namee, setNamee] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');

  return (
    <>
    <div className='component-builder'>
          <h4>📝 Component Builder Form: </h4>
          <input value={namee} onChange={ (e) => setNamee(e.target.value) } placeholder='Enter your name' />
          <input value={age} onChange={ (e) => setAge(e.target.value) } placeholder='Enter your age' />
          <input value={hobby} onChange={ (e) => setHobby(e.target.value) } placeholder='Enter your hobby' />
        
        <div className='component-output'>
            <h4>🎨 Your Component Output: </h4>
            <p>Name: {namee} </p> 
            <p> Age: {age} </p>
            <p> Hobby: {hobby} </p>
      </div>
    </div>

    </>
  );
}
export default App
