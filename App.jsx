import { useState } from 'react'
import downImg from './assets/download.webp'
import './App.css'

function App(){
  const [count, setCount] = useState(0)
  return(
  <>
  <div className='head'>
    <img src="{dowmImg}" width="200" height="200" alt="" srcset="" />
    <h1>Welcome to My App</h1>
  </div>
<br /><br /><br />
  <div className='about'>
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis exercitationem ducimus sapiente. At ab adipisci consectetur debitis praesentium officia aperiam perspiciatis, voluptate numquam velit labore quisquam quasi. Consectetur, eligendi.</p>
   <button className='counter' onClick={() => setCount((count) => count + 1)}>like:{count}</button>
    </div>
    <br /><br /><br />
    <div className='features'>
      <h2>Our Features   </h2>
      <img src="{downImg}" alt="download image" />
      <img src="{downImg}" alt="download image" />
      <img src="{downImg}" alt="download image" />
    </div>
</>
  )
}
export default App
