import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import UseState from './Components/UseState'
import UseEffect from './Components/UseEffect'
import UseEffect2 from './Components/UseEffect2'
import UseMemo from './Components/UseMemo'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/use-state' component={UseState} />
        <Route path='/use-effect' component={UseEffect} />
        <Route path='/use-effect2' component={UseEffect2} />
        <Route path='/use-memo' component={UseMemo} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
