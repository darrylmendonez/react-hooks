import React, { useState, useMemo, useEffect } from 'react'

function UseMemo() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo( () => slowFunction(number), [number])
  const themeStyles = useMemo( () => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark])
  useEffect( () => {
    console.log('Theme changed')
  }, [themeStyles])

  return (
    <>
      <input type="number" value={ number } onChange={ e => setNumber(parseInt(e.target.value)) } />
      <button onClick={ () => setDark(prevDark => !prevDark) }>Change Theme</button>
      <div style={themeStyles}>{ doubleNumber }</div>
    </>
  )

}

function slowFunction(num) { // mimic a really complext function by using a for loop that loops for a large amount of time even though it doesn't do anything
  console.log('Calling Slow Function')
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}

export default UseMemo