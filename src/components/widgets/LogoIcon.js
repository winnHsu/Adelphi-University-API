import React from 'react'

export default function LogoIcon({ href, src, alt }) {

    const style = {
        height: '38px',
        width: '38px'
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} style={style} />
        </a>
    )
}