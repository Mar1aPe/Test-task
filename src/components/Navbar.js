import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/profile'>profile icon</Link>
                </li>
                <li>
                    <Link to='/gallery'>gallery icon</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;