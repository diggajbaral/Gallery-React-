import React from 'react'
import Logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="Logo">
            <Link to="/"><img src={Logo} alt=""/></Link>
          </div>
          <nav>
            <ul>
              <li><Link to="#">HOME</Link></li>
              <li><Link to="#">HOME</Link></li>
              <li><Link to="#">HOME</Link></li>
              <li><Link to="#">HOME</Link></li>
              <li><Link to="#">HOME</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header