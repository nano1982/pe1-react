import React from 'react'

export const NavBarItem = ( {item, link} ) => {
  return (
    <li className="nav-item">
        <a className="nav-link active" href={link}>{item}</a>
    </li>
  )
}