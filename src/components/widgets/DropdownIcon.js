import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import colors from '../../config/colors';

export default function DropdownIcon() {

    const arrowDropdownStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.brown,
        height: '24px',
        width: '24px',
        borderRadius: '24px',
        marginRight: '6px',
        marginTop: '17px',
        marginLeft: '-30.5px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.logoYellow
    }

    return (
        <div style={arrowDropdownStyle}>
            <IoMdArrowDropdown size={20} color={colors.white} />
        </div>
    )
}
