import './App.css'
import { useState, useEffect } from 'react'
import { GetPromise, GetPromiseAll } from './Demo2'
import { getUserById } from './helper'
import React from 'react'
import Card from './Components/Card'
const UserIdList = [1, 2, 3, 4]
function App() {
  const [value, setValue] = useState('Loading')
  const [all, setAll] = useState(new Array(UserIdList?.length)?.fill(null))
  const [flag, setflag] = useState(false)
  const GetAllPromiseData = async () => {
    GetPromiseAll(UserIdList).then((Data) => {
      setAll([])
    })
  }
  const looping = async () => {
    let tempArr = []
    for (let i = 0; i < UserIdList.length; i++) {
      console.log(UserIdList[i])
      const res = await getUserById(UserIdList[i])
      console.log(res)
      tempArr = all
      tempArr[i] = res
      console.log('tempARR', tempArr)
      setAll(tempArr)
      setflag(!flag)
    }
  }
  useEffect(() => {
    // looping()
    // GetAllPromiseData()
    //using async await
    // ;(async () => {
    //   for (let i = 0; i < UserIdList.length; i++) {
    //     console.log(`${i + 1} called`)
    //     const data = await getUserById(i + 1)
    //     setAll((prevList) => {
    //       const newList = [...prevList] // create a copy of the list
    //       newList[i] = data // update the item at the correct index
    //       return newList
    //     })
    //     console.log(`${i + 1}`, data)
    //   }
    // })()

    //using .then()
    for (let i = 0; i < UserIdList.length; i++) {
      getUserById(i + 1).then((data) => {
        setAll((prevList) => {
          const newList = [...prevList] // create a copy of the list
          newList[i] = data // update the item at the correct index
          return newList
        })
      })
    }
    // try {
    //   GetPromise().then((value) => {
    //     setValue(value)
    //   })
    // } catch (err) {
    //   console.log(err)
    // }
  }, [])

  return (
    <div className='App'>
      <div className='grid-container'>
        {/* {typeof value === 'object' ? <Card value={value} /> : <h1>{value} </h1>} */}
        {all.map((element) => {
          console.log('element', element)
          return element === null ? (
            <h4>Loading</h4>
          ) : (
            <Card value={element}> </Card>
          )
        })}
      </div>
    </div>
  )
}

export default App
