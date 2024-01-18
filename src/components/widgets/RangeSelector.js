import React from 'react'
import colors from '../../config/colors';
import DropdownIcon from './DropdownIcon';

export default function RangeSelector({ range, handleRangeChange }) {
    const ranges = [10, 20, 30, 40, 50];

    const container = {
        backgroundColor: colors.logoYellow,
        border: 'none',
        marginRight: '1px',
        fontWeight: '600',
        fontSize: '15px',
        width: '180px',
        paddingLeft: '12px',
    }

    return (
        <>
            <div className="flexible-spacer" />
            <select value={range} onChange={handleRangeChange} style={container}>
                <option value="">Select a range</option>
                {ranges.map(num => (
                    <option key={num} value={num}>Show {num} Results</option>
                ))}
            </select>
            <DropdownIcon />
        </>
    );
}
