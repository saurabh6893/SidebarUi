import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Blank from './Pages/Blank'
import Flowstats from './Pages/Flowstats'

const Zipply: React.FC = () => {
  const [flowbar, setFlowbars] = useState<String[]>([])

  const addNew = () => {
    if (!flowbar.includes('newFlow')) {
      setFlowbars([...flowbar, 'newFlow'])
    }
  }
  return (
    <Router>
      <div className='Zipply'>
        <div className='sidebar'>
          <button className='add' onClick={addNew}>
            Add New Flow
          </button>

          <div className='flows'>
            <div className='flow'>Order</div>
            <div className='flow'>Outage</div>

            {flowbar.map((flow, index) => (
              <Link to='/flowstats' className='flow' key={index}>
                {flow}
              </Link>
            ))}
          </div>
        </div>
        <Routes>
          <Route path='/flowstats' element={<Flowstats />} />
          <Route path='/empty' element={<Blank />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Zipply
