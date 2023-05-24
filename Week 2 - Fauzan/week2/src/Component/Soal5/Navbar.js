import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='nav'>
            <a href='/' className='site-title'>
                TOKO TONO
            </a>
            <ul>
                <li>
                    <a href='/produk'>Produk</a>
                </li>
                <li>
                    <a href='/pembayaran'>Pembayaran</a>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar