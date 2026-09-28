import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <div className='flex justify-center items-center p-4'>
        <button onClick={() => {
          if(props.page > 1){
            props.setpage(props.page - 1)
            props.userSetdata([]) 
          }
        }} className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mr-2'>
          prev
        </button>
        <h4 className='font-bold ml-1 mr-3'>page {props.page}</h4>
        <button onClick={() => { props.setpage(props.page + 1) && props.userSetdata([]) }} className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded'>
          next
        </button>
      </div>
    </div>
  )
}

export default Buttons
