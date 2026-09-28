import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.item.url} target='_blank' rel='noreferrer'>
      <img className='mt-4 h-40' key={props.idx} src={props.item.download_url} alt={props.item.author} />
      <h2 className='font-bold'>{props.item.author}</h2>
      </a>
    </div>
  )
}

export default Card
