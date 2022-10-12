import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Blank from './Pages/Blank'
import Flowstats from './Pages/Flowstats'

export type Info = {
  text?: any
  setText?: any

  flowbar?: any
  setFlowbars?: any
}

type ContextProp = {
  children: React.ReactNode
}

export const ZipContext: React.Context<any> = createContext('')

const Zipply: React.FC<Info> = () => {
  const [text, setText] = useState('newFlow')
  const [flowbar, setFlowbars] = useState([''])

  const addNew = () => {
    if (!flowbar.includes('newFlow')) {
      setFlowbars([...flowbar, text])
    }
  }
  return (
    <ZipContext.Provider value={{ text, setText, flowbar, setFlowbars }}>
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
    </ZipContext.Provider>
  )
}

export default Zipply
