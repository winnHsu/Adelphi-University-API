import React, { useState } from 'react';
import colors from '../../config/colors';
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownIcon from '../widgets/DropdownIcon';

const style = `
  select:focus {
    outline: 1px solid rgba(244, 184, 64);
    box-shadow: 0 0 8px rgba(244, 184, 64);
  }
`;

export default function FilterSelectList({ items, setSelected }) {
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const handleSelectionChange = (event) => {
        const newValue = event.target.value;
        setSelectedItem(newValue);
        setSelected(newValue);
    };

    const containerStyle = {
        width: '216px',
        backgroundColor: colors.lightBrown,
        height: '60px',
        color: colors.white,
        fontSize: '15px',
        fontWeight: '600',
        paddingLeft: '10px',
        paddingRight: '28px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        cursor: 'pointer'
    }

    return (
        <>
            <style>{style}</style>
            <select
                id="category-select"
                value={selectedItem}
                onChange={handleSelectionChange}
                style={containerStyle}
            >
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <DropdownIcon />
        </>
    );
};