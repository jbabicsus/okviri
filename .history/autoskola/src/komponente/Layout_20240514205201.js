import React from 'react';
import '../layout.css'
import { Link } from 'react-router-dom';

function Layout({ children }) {
    /*menu*/
    const userMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Termini',
            path: '/termini',
        },
        {
            name: 'Prijava instruktora',
            path: 'prijava-instruktor'
        },
        {
            name: 'Profile',
            path: '/profile'
        },
        {
            name: 'Logout',
            path: '/logout',
        }
    ];

    const menuR = userMenu;

    return (
        <div className='main'>
            <div className='flex'>
                <div className='sidebar'>
                    <div className='sidebar-header'>
                        <h1>AUTOSKOLA</h1>
                    </div>

                    <div className='menu'>
                        {menuR.map((menu, index) => (
                            <Link key={index} to={menu.path} className='linkovi'>{menu.name}</Link> 
                        ))}
                    </div>
                </div>

                <div className='content'>
                    <div className='header'>header</div>
                    <div className='body'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
