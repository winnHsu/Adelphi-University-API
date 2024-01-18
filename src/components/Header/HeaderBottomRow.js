import React, { useState, useEffect } from 'react';
import './Header.css';
import SmallCircle from '../widgets/SmallCircle';
import logo_au from '../../assets/images/logo_au.png'
import links from '../../config/links';
import HeaderSelectList from '../lists/HeaderSelectList';
import { titleMeetAdelphi, titleAcademics, titleAdimissions, titleResearch, titleLifeAtAdelphi } from '../../data/headerTitles';

export default function HeaderBottomRow() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 150;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="header-bottom-row">
            <div className={`header-logo ${isScrolled ? 'smaller-logo' : ''}`} >
                <img
                    src={logo_au}
                    alt="Adelphi University logo"
                />
            </div>
            <div className="flexible-spacer" />
            <div>
                <a href={links.linkAbout} className="header-black-title">Meet Adelphi</a>
                <HeaderSelectList listArray={titleMeetAdelphi} className="header-select-list" />
            </div>
            <SmallCircle color="yellow" />
            <div>
                <a href={links.linkAcademics} className="header-black-title">Academics</a>
                <HeaderSelectList listArray={titleAcademics} className="header-select-list" />
            </div>
            <SmallCircle color="yellow" />
            <div>
                <a href={links.linkAdmissions} className="header-black-title">Admissions & Aid</a>
                <HeaderSelectList listArray={titleAdimissions} className="header-select-list" />
            </div>
            <SmallCircle color="yellow" />
            <div>
                <a href={links.linkResearch} className="header-black-title">Research</a>
                <HeaderSelectList listArray={titleResearch} className="header-select-list" />
            </div>
            <SmallCircle color="yellow" />
            <div>
                <a href={links.linkLifeAtAdelphi} className="header-black-title">Life at Adelphi</a>
                <HeaderSelectList listArray={titleLifeAtAdelphi} className="header-select-list" />
            </div>
        </div>
    )
}
