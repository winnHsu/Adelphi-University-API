import React, { useState } from 'react'
import colors from '../../config/colors';
import { titleLifeAtAdelphi } from '../../data/headerTitles'

export default function HeaderSelectList({ listArray, className }) {
    const [hoverStates, setHoverStates] = useState(new Array(listArray.length).fill(false));

    const listStyle = {
        right: (listArray === titleLifeAtAdelphi) ? '56px' : null,
        position: 'absolute',
        width: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '24px',
        paddingLeft: '46px',
        paddingRight: '46px',
        paddingBottom: '22px',
        backgroundColor: colors.brown,
    };

    const listItemStyle = {
        textDecoration: 'none',
        textAlign: 'start',
        color: colors.white,
        fontSize: '14px',
        fontWeight: '500',
        transition: 'color 0.3s'
    };

    const separatorStyle = {
        height: '1px',
        width: '32px',
        marginTop: '14px',
        marginBottom: '12px',
        backgroundColor: colors.logoYellow,
        transition: 'width 0.3s'
    };

    const triangle = {
        width: '0',
        height: '0',
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderBottom: '8px solid',
        marginTop: '-6px',
        marginBottom: '25px',
        marginLeft: (listArray === titleLifeAtAdelphi) ? '174px' : '0px',
        borderBottomColor: colors.brown,
    };

    return (
        <>
            <div style={listStyle} className={className}>
                <div style={triangle} />
                {listArray.map((item, index) => (
                    <React.Fragment key={index}>
                        <a
                            href={item[1]}
                            style={{
                                ...listItemStyle,
                                color: hoverStates[index] ? colors.logoYellow : colors.white
                            }}
                            onMouseEnter={() => setHoverStates(hoverStates.map((state, i) => (i === index ? true : state)))}
                            onMouseLeave={() => setHoverStates(hoverStates.map((state, i) => (i === index ? false : state)))}
                        >
                            {item[0]}
                        </a>
                        <div
                            style={{
                                ...separatorStyle,
                                width: hoverStates[index] ? '180px' : '32px'
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}