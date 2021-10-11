import React from 'react'

const Divider = () => {
  return (
    <div className="mt-3 d-flex justify-content-center align-items-center">
      <div style={{ height: '1px', backgroundColor: 'lightgray', flex: 1 }}></div>
      <span className="mx-2">or</span>
      <div style={{ height: '1px', backgroundColor: 'lightgray', flex: 1 }}></div>
    </div>
  )
}

export default Divider
