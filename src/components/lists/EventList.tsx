import React from 'react';
import EventCard from '../cards/EventCard/EventCard.tsx';
import extractTime from '../../utilities/eventHandling/extractTime.js';
import extractDescription from '../../utilities/eventHandling/extractDescription.js';
import decodeHTMLEntities from '../../utilities/eventHandling/decodeHTMLEntities.js';

type Event = {
    id: string;
    title: string;
    link: string;
    content: string;
    yoast_head: string;
    location: string;
    image: string;
    altText: string;
    event_category: string[];
};

type EventListProps = {
    events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {

    return (
        <div className="event-list">
            {events.map((event) => (
                <EventCard
                    key={event.id}
                    title={decodeHTMLEntities(event.title)}
                    link={event.link}
                    description={extractDescription(event.content)}
                    time={extractTime(event.yoast_head)}
                    location={event.location}
                    image={event.image}
                    altText={event.altText}
                    // event_category={categoryMapping[event.event_category] || 'Unknown Category'}
                    event_category={event.event_category}
                />
            ))}
        </div>
    );
};

export default EventList;