import React from 'react'

function Header({number,increment}) {
  
    console.log("heder renderlandı")
  return (
    <div>
      <h1>Header  </h1>
  
      <button onClick={increment} type='submit'>Click</button>
      <hr/>
    </div>
  )
}

export default React.memo(Header)
