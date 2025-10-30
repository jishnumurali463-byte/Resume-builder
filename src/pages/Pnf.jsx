import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center p-5 my-3 flex-column'>
      <img
        width={'40%'}
        src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif"
        alt="page not found"
      />
      <h1>404!</h1>
      <h4>Page Not Found</h4>
      <Link className='btn btn-success' to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Pnf
