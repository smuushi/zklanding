import { useState } from 'react'


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
        <div>
          <h1>zkSpin White Paper Title</h1>
        </div>
        
        <div>
          <p>
            paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum 
          </p>
        </div>

        <div>
          <a href="/Whitepaper.pdf">View PDF Paper</a>
        </div>
      </div>

      <div id='secondcard' className='card'>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className='footer'>

        <div>
          <a href="">Under Construction Footer Link 1</a>
        </div>
        <div>
          <a href="">Under Construction Footer Link 2</a>
        </div><div>
          <a href="">Under Construction Footer Link 3</a>
        </div>

      </div>


    </>
  )
}

export default App
