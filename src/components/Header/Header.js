import React from 'react';
import './Header.css';
import HeaderTopRow from './HeaderTopRow';
import HeaderBottomRow from './HeaderBottomRow';

const Header = () => {
    return (
        <div className="header-content">
            <HeaderTopRow />
            <HeaderBottomRow />
        </div>
    );
};

export default Header;