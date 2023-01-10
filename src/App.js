import './App.css';
import { useState,useEffect } from 'react';
import {GetPromise,GetPromiseAll} from './Demo2'

import React from 'react';
import Card from './Components/Card'

function App() {
const [value ,setValue ] = useState('Loading')
const [all,setAll]  =useState([])

const GetAllPromiseData = async()=>{

   GetPromiseAll([1,2,3,4]).then((Data)=>{

     setAll(Data)
   })
}
useEffect(()=>{
     setAll(new Array(4).fill('Loading'))
      GetAllPromiseData()


 
 GetPromise().then((value )=>{
setValue(value)
  })
},[])

 

  return (
    <div className='App'>
      <div className='grid-container'>
        {typeof value === 'object' ? <Card value={value}/> : <h1>{value} </h1>}

        {all.map((element)=>{
            return (typeof element =='string'? <h4>Loading</h4>:<Card value={element}> </Card>  )

           
        })}
      </div>
    </div>
  )
}

export default App;
