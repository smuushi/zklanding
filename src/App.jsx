import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Card.css'
import { NavHeader } from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="navbar">
        <div className="home"><a href="/">zkSpin</a></div>
        <div><a href="https://www.linkedin.com/in/justinzhang1/">by Justin Zhang</a></div>
      </div>

  

      <div id='firstcard' className="card">
        <h1>zkSpin White Paper</h1>
        <p>
          paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum 
        </p>
          <a href="/Whitepaper.pdf">View Paper</a>
      </div>
      <div id='secondcard' className='card'>


      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
