import React from 'react'
import './EventPage.css';
import { IoMdHome } from "react-icons/io";
import colors from '../../config/colors';
import links from '../../config/links';

export default function EventPageBanner() {
    return (
        <div className='event-page-banner'>
            <div>
                <IoMdHome size={18} color={colors.lightBrown} />
                <a href={links.linkHome}>Home</a>
                <div />
            </div>
            <p>Events</p>
        </div>
    )
}