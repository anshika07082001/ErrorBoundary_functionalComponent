import React from 'react'

const ErrorComponent = ({error,resetErrorBoundary},props) => {
  return (
  <>
  <h4 className='error'>{error.message}</h4>
  <button className='button' onClick={resetErrorBoundary}>Reset</button>
  </>
  )
}

export default ErrorComponent