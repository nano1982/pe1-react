import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import empty from '../../images/empty.png'
import './index.css';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <spam className="navbar-brand">Slash's Store</spam>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ItemListContainer />
        </div>
        <img src={empty} alt='empty_logo' style={{width:'20px', alignContent: 'end', marginRight: '2%'}}/>
        <p id="counter">{1}</p>
    </nav>
  )
}