import React from 'react'

const NumberComponent = (props) => {

  // condition checks whether number is less than 5 or not
  if(props.number<5){
    throw new Error('Number less than 5!!')
  }
  return (
    <>
    <h3>{props.number}</h3>
    <button className='button' onClick={props.btnHandler}>Get Number</button>
    </>
  )
}

export default NumberComponent