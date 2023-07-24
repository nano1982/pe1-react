import React from 'react'
import { NavBarItem } from '../NavBarItem/NavBarItem'

export default function ItemListContainer() {
  return (
    <ul className="navbar-nav">
        <NavBarItem item="Eléctricas" />
        <NavBarItem item="Acústicas" />
        <NavBarItem item="Gears" />
        <NavBarItem item="Slash.com" link="https://www.slashonline.com/"/>
    </ul>
    
  )
}
