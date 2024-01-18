import React, { useState } from 'react'
import colors from '../../config/colors';
import IconButton from '../buttons/IconButton';
import { TbSearch } from 'react-icons/tb';


export default function () {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    function onSearchSubmit(searchText) {
        let baseUrl = 'https://www.adelphi.edu/events/?query=' + searchText + '#filter_results';
        window.location.href = baseUrl;
    }
    const container = {
        display: 'flex',
        height: '44px',
        width: '590px',
        marginLeft: '56px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.3)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.lightGray,
        padding: '8px',
        marginBottom: '66px',
    }

    const textInput = {
        height: '44px',
        width: '480px',
        fontSize: '18px',
        fontWeight: '900',
        fontColor: colors.gray,
        paddingLeft: '14px',
        border: 'none',
        backgroundColor: colors.white,
    }

    return (
        <div style={container}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search by keyword"
                style={textInput}
            />
            <IconButton
                text={'Submit'}
                Icon={TbSearch}
                onClick={() => onSearchSubmit(inputValue)}
                fromColor={colors.black}
                toColor={colors.black}
                height={'44px'}
                width={'160px'}
                isLeft={true}
                iconColor={colors.logoYellow}
                textColor={colors.white}
            />
        </div>
    )
}
