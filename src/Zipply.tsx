import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
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
  const [flowbar, setFlowbars] = useState(['Outage'])
  const [active, setActive] = useState<boolean>(false)
  const more = () => {
    setActive(!active)
  }
  const addNew = () => {
    if (!flowbar.includes('newFlow')) {
      setFlowbars([...flowbar, text])
    }
  }

  return (
    <ZipContext.Provider
      value={{ text, active, setActive, setText, flowbar, setFlowbars }}
    >
      <div className='Zipply'>
        <Navbar />
        <div className='mainbody'>
          <div className='sidebar'>
            <button className='add' onClick={addNew}>
              Add New Flow
            </button>

            <div className='flows'>
              <div className='flow'>Order</div>
              {flowbar.map((flow, index) => (
                <button
                  onClick={more}
                  className='flowB'
                  key={index}
                  style={{ color: 'black' }}
                  disabled={flowbar.length - 1 > index ? true : false}
                >
                  {flow}
                </button>
              ))}
            </div>
          </div>
          <div className='mainbox'>{active ? <Flowstats /> : <Blank />}</div>
        </div>
      </div>
    </ZipContext.Provider>
  )
}

export default Zipply
