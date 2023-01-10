import './App.css';
import { useState,useEffect } from 'react';
import {GetPromise} from './Demo2'

import React from 'react';
import Card from './Components/Card'

function App() {
const [value ,setValue ] = useState('Loading')

useEffect(()=>{
 GetPromise().then((value )=>{
setValue(value)
  })
},[])

 

  return (
    <div className='App'>
      <div className='grid-container'>
        {typeof value === 'object' ? <Card value={value}/> : <h1>{value} </h1>}
      </div>
    </div>
  )
}

export default App;
