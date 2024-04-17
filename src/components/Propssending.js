import React from 'react'

export const Propssending = (props) => {
    console.log(props,"syam")
  return (
    <div>
<h1>may name is :{props.name}</h1>
<h1>may name is :{props.age}</h1>
<h1>may name is :{props.location}</h1>
{/* props sending */}
<div>
    <h1 style={{color:"navy"}}>
        which game do u like : {props.game}
    </h1>
</div>
    </div>
  )
}
