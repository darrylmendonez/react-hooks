import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {

  return (
    <>
      <h4>Home</h4>
      <ul>
        <li>
          <NavLink className='nav-link' exact to={'/use-state'}>
            Use State
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-effect'}>
            Use Effect
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-effect2'}>
            Use Effect2
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-memo'}>
            Use Memo
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Home