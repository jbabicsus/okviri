import React from 'react';
import '../layout.css'

function Layout({children}) {

    /*menu*/
    const userMenu =[
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
            path:'/profile'
        },
        {
            name: 'Logout',
            path: '/logout',
        }
    ];

    const menuR= userMenu;

    return (
        <div className='main'>
            <div className='flex'>
                <div className='sidebar'>
                    aside
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
