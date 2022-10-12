import React from 'react'

const Flowstats = () => {
  return (
    <div className='flowstats'>
      <div className='btx'>
        <button className='delete'>Delete</button>
        <button className='cancel'>Cancel</button>
        <button className='Save'>Save</button>
      </div>
      <div className='flowinfo'>
        <h2>Flow Info</h2>
        <div className='flowbox'>
          <label>Name</label>
          <input type='text' placeholder='Enter a name' />
        </div>
      </div>
    </div>
  )
}

export default Flowstats
