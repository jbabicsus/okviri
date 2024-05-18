// Layout.js
import React from 'react';

function Layout({children}) {
    return (
        <div className='main'>
            <div className='flex'>
                <div className='aside'>
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
