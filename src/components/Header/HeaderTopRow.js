import React from 'react'
import './Header.css';
import SmallCircle from '../widgets/SmallCircle';
import { TbUserFilled, TbSearch } from 'react-icons/tb';
import links from '../../config/links';
import colors from '../../config/colors';

export default function HeaderTopRow() {
    return (
        <div className="header-top-row">
            <a href={links.linkApply} className={"header-title header-bold-link"}>APPLY</a>
            <SmallCircle color="gray" />
            <a href={links.linkVisit} className={"header-title header-bold-link"}>VISIT</a>
            <SmallCircle color="gray" />
            <a href={links.linkGiving} className={"header-title header-bold-link"}>GIVE</a>
            <div className="flexible-spacer" />
            <a href={links.linkNews} className={"header-title header-link"}>News</a>
            <SmallCircle color="gray" />
            <a href={links.linkEvents} className={"header-title header-link"}>Events</a>
            <SmallCircle color="gray" />
            <a href={links.linkAthletics} className={"header-title header-link"}>Athletics</a>
            <SmallCircle color="gray" />
            <a href={links.linkAlumni} className={"header-title header-link"}>Alumni</a>
            <SmallCircle color="gray" />
            <a href={links.linkECampus} className={"header-title header-link"}>eCampus</a>
            <SmallCircle color="gray" />
            <a href={links.linkStrategicPlan} className={"header-title header-yellow-bold-link"}>Strategic Plan</a>
            <div className="search-button-box">
                <TbSearch size={18} color={colors.logoYellow} />
                <a href="#" className={"search-button"}>Search</a>
            </div>
            <div className="quick-links-box">
                <TbUserFilled size={18} color={colors.brown} />
                <a href="#" className={"header-black-bold-link"}>QUICK LINKS</a>
            </div>
        </div>
    )
}