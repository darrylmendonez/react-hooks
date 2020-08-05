import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import UseState from './Components/UseState'
import UseEffect from './Components/UseEffect'
import UseEffect2 from './Components/UseEffect2'
import UseMemo from './Components/UseMemo'
import UseRef from './Components/UseRef'
import UseRef2 from './Components/UseRef2'
import UseRef3 from './Components/UseRef3'
import UseContext from './Components/UseContext'
import UseReducer from './Components/UseReducer'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/use-state' component={UseState} />
        <Route path='/use-effect' component={UseEffect} />
        <Route path='/use-effect2' component={UseEffect2} />
        <Route path='/use-memo' component={UseMemo} />
        <Route path='/use-ref' component={UseRef} />
        <Route path='/use-ref2' component={UseRef2} />
        <Route path='/use-ref3' component={UseRef3} />
        <Route path='/use-context' component={UseContext} />
        <Route path='/use-reducer' component={UseReducer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
