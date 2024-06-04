// import React from 'react';

import Nav from "./Nav";

const Navbar = () => {
    const options = [
        {id: 1, path: '/', name: 'Home'},
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/blog', name: 'Blog' },
        { id: 5, path: '/careers', name: 'Careers' },
    ];
    
    return (
       <>
        <nav className="flex justify-center py-4"> 
            {
                options.map((rut) => <Nav props={rut} key={rut.id}></Nav>)
            }
        </nav>

       </>
    );
};

export default Navbar;
 


