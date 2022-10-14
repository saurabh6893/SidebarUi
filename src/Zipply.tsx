import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import Blank from './Pages/Blank'
import Flowstats from './Pages/Flowstats'

export type Info = {
  text?: any
  setText?: any
  sideArr?: any
  setSideArr?: any
}

type ContextProp = {
  children: React.ReactNode
}

export const ZipContext: React.Context<any> = createContext('')

const Zipply: React.FC<Info> = () => {
  const [sideArr, setSideArr] = useState<any>([])
  const [text, setText] = useState<any>('')
  const [active, setActive] = useState<any>(false)
  const [selected, setSelected] = useState<any>({})

  const Update = (id: any) => {
    setActive(!active)
    setSelected(id)
    console.log(id)
  }
  const pushtext = (e: any) => {
    setText(e.target.value)
  }

  const addNew = (E: any) => {
    let Flowbox = {
      id: Date.now(),
      title: 'New Flowbox',
    }
    let a = [...sideArr]
    a.push(Flowbox)
    setSideArr(a)
  }

  return (
    <ZipContext.Provider
      value={{
        sideArr,
        selected,
        setSideArr,
        text,
        setText,
        active,
        setActive,
        pushtext,
      }}
    >
      <div className='Zipply'>
        <Navbar />
        <div className='mainbody'>
          <div className='sidebar'>
            <button className='add' onClick={(e) => addNew(e)}>
              Add New Flow
            </button>

            <div className='flows'>
              <div className='flow'>Order</div>
              <div className='flow'>Outage</div>

              {sideArr.map((component: any) => (
                <button
                  className='flow'
                  key={component.id}
                  onClick={() => Update(component)}
                >
                  {component.title}
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
