// Layout.js
import React from 'react';
import '../layout.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Layout({ children }) {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();

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
            path: '/prijava-instruktor', // Ispravljeno: dodan '/' ispred putanje
        },
        {
            name: 'Profile',
            path: '/profile',
        },
        {
            name: 'Logout',
            path: '/logout',
        },
    ];

    return (
        <div className='main'>
            <div className='flex'>
                <div className='sidebar'>
                    <div className='sidebar-header'>
                        <h1>AUTOSKOLA</h1>
                    </div>

                    <div className='menu'>
                        {userMenu.map((menu) => (
                            <div key={menu.path} className={`flex ${location.pathname === menu.path ? 'active-menu' : ''}`}>
                                <Link to={menu.path} className='linkovi'>{menu.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='content'>
                    <div className='header'>
                        <div className='flex'>
                            {user && <Link className='link2' to='/profile'>{user.name}</Link>}
                        </div>
                    </div>

                    <div className='body'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
