"use client";
import { useState } from "react"
import "./Header.css"

const Header = ({ header }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleItemClick = (index) => {
    setActiveIndex(index)
  }

  return ( 
    <header className="Header">
      <div className="container">
        <ul className="container__list">
          {
            header.navbar.map((el, index) => {
              return (
                <li 
                  key={ index } 
                  onClick={ () => handleItemClick(index) }
                  className={activeIndex === index ? 'active' : '' }
                >
                  { el }
                </li>
              )
            })
          }
        </ul>
        <div className="input_field">
          <input />
        </div>
      </div>
    </header>
   );
}
 
export default Header;