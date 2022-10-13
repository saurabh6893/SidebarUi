import React from 'react'
import Profile from './photos/profile.svg'
import Logout from './photos/logout.svg'

const Navbar = () => {
  return (
    <header>
      <div className='left'>
        <h1>
          Ziply<span>Fiber</span>
        </h1>
      </div>
      <div className='right'>
        <img src={Profile} alt='na' width='30px' />
        <h3>Name</h3>
        <img src={Logout} alt='na' width='30px' />
      </div>
    </header>
  )
}

export default Navbar
