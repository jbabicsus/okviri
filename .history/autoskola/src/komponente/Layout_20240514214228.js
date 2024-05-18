import React from 'react';
import '../layout.css'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Layout({ children }) {
    const {user} = useSelector((state)=>state.user);
    const lokacija= useLocation()
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
                        {menuR.map((menu, index) => {
                            const isActive = lokacija.pathname === menu.path
                            return <div className={`flex ${isActive && 'active-menu'}`}>
                                <Link key={index} to={menu.path} className='linkovi'>{menu.name}</Link> 
                            </div>
})}
                    </div>
                </div>

                <div className='content'>
                    <div className='header'>
                        <div className='flex'>
                            <Link className='link2' to='/profile'>{user.name}</Link>

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
