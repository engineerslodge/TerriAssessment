import React, {useEffect, useState} from 'react';
import chuck from './chuck.png';
import './App.css';
import axios from 'axios';

function App() {

  const [state, setState,] = useState({
    joke: ''
  })

  useEffect(() => {
    apiFetch();
   
  },[]);

  const apiFetch = async () => {
     const result = await axios.get('https://api.chucknorris.io/jokes/random');
     console.log(result.data.value);
     setState({
      ...state,
      joke: result.data.value
     })
  }

  return (
      <div className='container'>
       
          <div>
            <h1 className="title">Chuck Norris</h1>
            <img src={chuck} alt="chuck-norris" />
          </div>
       
        <h2 className='subtitle'>Here is the Joke</h2>
        <h4>{state.joke}</h4>
      </div>
  );
}

export default App;
