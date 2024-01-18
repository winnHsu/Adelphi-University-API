import React from 'react'
import './Footer.css'

export default function FooterLinks({ text, linkData }) {
    return (
        <div className="footer-column" style={{ flexDirection: text ? 'column' : 'row' }}>
            {text && <p>{text}</p>}
            {linkData.map(([title, link], index) => (
                <a key={index} href={link} style={text ? { width: '209.5px' } : { marginRight: '35px' }}>{title}</a>
            ))}
        </div>
    )
}
