import React, { useState, useEffect, useRef } from 'react'

function UseRef3() {

  const [name, setName] = useState('')
  const prevName = useRef()

  useEffect( () => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={ name } onChange={ e => setName(e.target.value)} />
      <div>My name is { name } and it used to be { prevName.current }</div>
    </>
  );
}
 
export default UseRef3

// refs are useful for accessing dom elements
// and for persisting values across renders without actually causing a rerender