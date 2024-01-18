import React, { useContext } from 'react'
import './EventPage.css';
import colors from '../../config/colors';
import CircleButton from '../../components/buttons/CircleButton';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TotalPagesContext } from '../../context/TotalPagesContext';

export default function EventPagePagination({ currentPage, prevPage, nextPage, range, selectedPage, handlePageChange, goToSelectedPage }) {
    const totalPages = useContext(TotalPagesContext);
    const totalPage = Math.ceil(totalPages * 10 / range);

    return (
        <div className="pagination">
            <CircleButton isLeft={true} onClick={prevPage} isButtonDisabled={currentPage === 1} />
            <div className="pagination-select">
                <span>Page</span>
                <select value={selectedPage} onChange={handlePageChange}>
                    {Array.from({ length: totalPage }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <div>
                    <IoIosArrowUp size={16} />
                    <IoIosArrowDown size={16} />
                </div>
                <span>of {totalPage}</span>
                <button onClick={goToSelectedPage}>Go</button>
            </div>
            <CircleButton isLeft={false} onClick={nextPage} isButtonDisabled={currentPage === totalPage} />
        </div>
    )
}
