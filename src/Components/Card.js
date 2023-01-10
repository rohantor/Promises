import React from 'react'

export default function Card({value}) {
  const [title,id,userid] = [value.title,value.id,value.userid];
  return (
    <>
      <div className='card_outer'>
        <div>
          <h3 className='title' style={{ display: 'inline-block' }}>
            Title : {title}
          </h3>
          <h3>id : {id}</h3>
          <h3>user id :{userid}</h3>
        </div>
      </div>
    </>
  )
}
