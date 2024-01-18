import React from 'react'
import './EventCard.css'
import colors from '../../../config/colors'
import { IoIosCalendar, IoMdPin } from "react-icons/io";
import highlightedEvent from '../../../data/highlightedEvent'

export default function BigEventCard() {

    return (
        <div className="event-card-container big-card-container">
            <div className="big-card-left-yellow" />
            <div className="event-card">
                <div className="event-card-category-container">
                    <a href={"#"} className="event-card-category">ALUMNI AND FRIENDS</a>
                    <span>,&nbsp;&nbsp;</span>
                    <a href={"#"} className="event-card-category">ARTS AND CULTURE</a>
                    <span>,&nbsp;&nbsp;</span>
                    <a href={"#"} className="event-card-category">CLUBS, ORGANIZATIONS AND ACTIVITIES</a>
                    <span>,&nbsp;&nbsp;</span>
                    <a href={"#"} className="event-card-category">LECTURES</a>
                </div>
                <a className="event-card-title big-card-title" href={highlightedEvent.link}>{highlightedEvent.title}</a>
                <p className="event-card-description big-card-description">{highlightedEvent.description}</p>
                <div className="event-card-info">
                    <IoIosCalendar size={18} color={colors.lightBrown} />
                    <p >{highlightedEvent.time}</p>
                    <IoMdPin size={18} color={colors.lightBrown} />
                    <p >{highlightedEvent.location}</p>
                </div>
            </div>
            <div className="flexible-spacer" />
            <a href={highlightedEvent.link} className="event-card-image-link">
                <img className="big-card-image" src={highlightedEvent.image} alt={highlightedEvent.altText} />
            </a>
        </div>
    )
}
