import React from 'react'

const List = ({data}) => {
  return (
    <div className='bg-red-500 p-2 rounded-xl m-2 flex flex-col gap-3'>
      <div>{data.name}</div>
      <div>{data.email}</div>
    </div>
  )
}

export default List