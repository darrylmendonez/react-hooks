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
        <li>
          <NavLink className='nav-link' exact to={'/use-ref'}>
            Use Ref
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-ref2'}>
            Use Ref2
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-ref3'}>
            Use Ref3
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-context'}>
            Use Context
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-reducer'}>
            Use Reducer
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-reducer2'}>
            Use Reducer2
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/use-callback'}>
            Use Callback
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' exact to={'/custom-hooks'}>
            Custom Hooks
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Home