import React from 'react'
import categoryMapping from '../../data/categoryMapping'

export default function convertEventCategory(categoryCodes) {
    return categoryCodes.map((code, index) => (
        <React.Fragment key={code}>
            <a href={"#"} className="event-card-category">{categoryMapping[code] || 'Unknown Category'}</a>
            {index < categoryCodes.length - 1 && <span>,&nbsp;&nbsp;</span>}
        </React.Fragment>
    ));
}