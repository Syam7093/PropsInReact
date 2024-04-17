
import { useState } from 'react';
import './App.css';
import { Propssending } from './components/Propssending';
//map method using props
function App(props) {
  console.log(props,"app")

  const [number,setnumber]=useState(false)
  const [input,setinput]= useState(0)
  console.log(input,"ram")
  let users=[
    {
    name:"syam",
    age:20,
    location:"hyd"
  }
  ]
 const dec=()=>{
  if(input==0)
  {
    return null
  }
  setinput(input-1)
 }
 const inc=()=>{
  setinput(input+1)
  setnumber(true)
 }
 

  return (
    <div className="App" style={{backgroundColor:input,height:"100%"}}>
       {
        users.map((e)=>{
          return <div>
            <Propssending name={e.name} age={e.age} location={e.location}></Propssending>
          </div>
        })
       }
       
       <div>
        <Propssending game={"cricket"}></Propssending>
       </div>


       {input==0 ?"":<button   onClick={()=>{dec()}}>-</button>}
       <h1>{input}</h1>
       <button onClick={()=>{inc()}}>+</button>
    </div>
  );
}

export default App;
