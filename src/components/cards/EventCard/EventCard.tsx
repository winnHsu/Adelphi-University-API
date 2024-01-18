import React from 'react';
import './EventCard.css'
import { IoIosCalendar, IoMdPin } from "react-icons/io";
import colors from '../../../config/colors';
import convertEventCategory from '../../../utilities/eventHandling/convertEventCategory';

type EventCardProps = {
    title: string;
    link: string;
    description: string;
    time: string;
    location: string;
    image: string;
    altText: string;
    event_category: string[];
};

const EventCard: React.FC<EventCardProps> = ({
    title,
    link,
    description,
    time,
    location,
    image,
    altText,
    event_category,
}) => {

    return (
        <div className="event-card-container">
            <div className="event-card">
                <div className="event-card-category-container">
                    {convertEventCategory(event_category)}
                </div>
                <a className="event-card-title" href={link}>{title}</a>
                <p className="event-card-description">{description}</p>
                <div className="event-card-info">
                    <IoIosCalendar size={18} color={colors.lightBrown} />
                    <p >{time}</p>
                    <IoMdPin size={18} color={colors.lightBrown} />
                    <p >{location}</p>
                </div>
            </div>
            <div className="flexible-spacer" />
            <a href={link} className="event-card-image-link">
                <img className="event-card-image" src={image} alt={altText} />
            </a>
        </div>
    );
};

export default EventCard;