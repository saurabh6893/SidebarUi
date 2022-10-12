import React, { useContext } from 'react'
import { ZipContext } from '../Zipply'

const Flowstats = () => {
  const { text, setText, flowbar, setFlowbars } = useContext(ZipContext)

  const texton = (e: any) => {
    setText(e.target.value)
  }

  const saveFlow = () => {
    setFlowbars([...flowbar, text])
  }

  return (
    <div className='flowstats'>
      <div className='btx'>
        <button className='delete'>Delete</button>
        <button className='cancel'>Cancel</button>
        <button className='Save' onClick={saveFlow}>
          Save
        </button>
      </div>
      <div className='flowinfo'>
        <h2>Flow Info</h2>
        <div className='flowbox'>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter a name'
            onChange={(e) => texton(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Flowstats
