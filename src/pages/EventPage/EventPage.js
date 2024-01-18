import React, { useState } from 'react';
import './EventPage.css';
import EventPageBanner from './EventPageBanner';
import useFetchEvents from '../../hooks/useFetchEvents';
import EventList from '../../components/lists/EventList.tsx';
import BigEventCard from '../../components/cards/EventCard/BigEventCard.js';
import FilterButton from '../../components/buttons/FilterButton.js';
import FilterSelectList from '../../components/lists/FilterSelectList.js';
import { filterCategories, filterMonths, filterLocations } from '../../data/filterOptions.js';
import IconButton from '../../components/buttons/IconButton.js';
import { IoIosArrowRoundForward } from "react-icons/io";
import SearchInputBar from '../../components/widgets/SearchInputBar.js';
import colors from '../../config/colors.js';
import RangeSelector from '../../components/widgets/RangeSelector.js';
import EventPagePagination from './EventPagePagination.js';

const EventPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [range, setRange] = useState(10);
    const { data: events, isLoading, error } = useFetchEvents(currentPage, range);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    const [selectedPage, setSelectedPage] = useState(1);
    const [selected, setSelected] = useState('Filter');
    const [filters, setFilters] = useState({ category: 'All Categories', location: 'All Locations', month: 'All Months' });

    const handleRangeChange = (event) => {
        setRange(parseInt(event.target.value));
    };

    const handlePageChange = (event) => {
        setSelectedPage(parseInt(event.target.value));
    };

    const goToSelectedPage = () => {
        setCurrentPage(selectedPage);
    };

    const handleButtonClick = (buttonName) => {
        setSelected(buttonName);
    };

    function createFilterUrl() {
        let categoryUrl = 'https://www.adelphi.edu/events/?filters%5Bcategory%5D=';
        let locationUrl = '&filters%5Blocation%5D=';
        let monthUrl = '&filters%5Bmonth%5D=';
        let finalUrl = '#filter_results';
        const { category, location, month } = filters;
        if (category !== 'All Categories') {
            categoryUrl += category.toLowerCase().replace(/, /g, '-').replace(/ /g, '-').replace(/&/g, '');
        }
        if (location !== 'All Locations') {
            locationUrl += location.toLowerCase().replace(/, /g, '-').replace(/ /g, '-').replace(/&/g, '');
        }
        if (month !== 'All Months') {
            const months = {
                January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
                July: '07', August: '08', September: '09', October: '10', November: '11', December: '12'
            };
            const parts = month.split(' ');
            monthUrl += `${parts[1]}-${months[parts[0]]}`;
        }
        window.location.href = categoryUrl + locationUrl + monthUrl + finalUrl;
    }

    return (
        <div className="event-page">
            <EventPageBanner />
            <BigEventCard />
            <div className='filter-buttons'>
                <FilterButton text="Filter" isSelected={selected === 'Filter'} onClick={() => handleButtonClick('Filter')} />
                <FilterButton text="Search" isSelected={selected === 'Search'} onClick={() => handleButtonClick('Search')} />
            </div>
            {selected === 'Filter' ? <div className='filter-options'>
                <FilterSelectList items={filterCategories} setSelected={(category) => setFilters({ ...filters, category })} />
                <FilterSelectList items={filterLocations} setSelected={(location) => setFilters({ ...filters, location })} />
                <FilterSelectList items={filterMonths} setSelected={(month) => setFilters({ ...filters, month })} />
                <IconButton
                    text={'Show Results'}
                    Icon={IoIosArrowRoundForward}
                    onClick={createFilterUrl}
                    fromColor={colors.logoYellow}
                    toColor={colors.white}
                    height={'60px'}
                    width={'188px'}
                    isLeft={false}
                    iconColor={colors.black}
                    textColor={colors.black}
                />
                <RangeSelector range={range} handleRangeChange={handleRangeChange} />
            </div> : <SearchInputBar />}
            {error ? <div>Error Loading Events</div> : isLoading ? <div>Loading Events...</div> : <EventList events={events} />}
            <EventPagePagination
                currentPage={currentPage}
                prevPage={prevPage}
                nextPage={nextPage}
                range={range}
                selectedPage={selectedPage}
                handlePageChange={handlePageChange}
                goToSelectedPage={goToSelectedPage}
            />
        </div>
    );
}

export default EventPage;