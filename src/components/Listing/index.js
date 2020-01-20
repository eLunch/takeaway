import React, { useState, useEffect } from 'react';
import { SORT_LIST } from '../../constants';
import data from '../../assets/data';
import { sortingByField, defaultSorting } from '../../helpers';

import './styles.scss';

import Items from '../Items';

const Listing = () => {
    // Initial state
    const [restaurantsList, setRestaurantsList] = useState(defaultSorting(data.restaurants));
    const [sortByFavorite, setSortByFavorite] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortByField, setSortByValue] = useState("bestMatch");

    // Searching
    const handleChange = event => {
        setSearchValue(event.target.value)
    };
    useEffect(() => {
        let results = data.restaurants.filter(item => item.name.toLowerCase().includes(searchValue));

        setRestaurantsList(defaultSorting([...results]));
    }, [searchValue]);

    // Sorting by Select
    const handleChangeSelect = event => {
        setSortByValue(event.target.value)
    };
    useEffect(() => {
        let results = sortingByField(restaurantsList, sortByField, sortByFavorite);

        setRestaurantsList([...results]);
    }, [sortByField]);

    // Sorting by Favorite
    const handleClickFavorite = name => {
        !sortByFavorite.includes(name) ?
        setSortByFavorite(sortByFavorite.concat([name])) :
        setSortByFavorite(sortByFavorite.filter(item => item !== name));
    };
    useEffect(() => {
        restaurantsList.map((item) => {
            sortByFavorite.includes(item.name) ?
                (item.isFavorite = 1) :
                (item.isFavorite = 0)
        });

        let results = defaultSorting(restaurantsList, sortByFavorite);

        setRestaurantsList([...results]);
    }, [sortByFavorite]);

    // console.log(sortByFavorite, searchValue, sortByField);

    return (
        <div className="wrapper">
            <div className="utility-bar">
                <input
                    type="search"
                    placeholder="Search for restaurants"
                    value={searchValue}
                    onChange={handleChange}
                    className="input"
                />
                <div className="select-box">
                    <label className="label">Sort by</label>
                    <div className="select-wrapper">
                        <select onChange={handleChangeSelect} className="select" value={sortByField}>
                            {SORT_LIST.map((item, key) => {
                                return (
                                    <option
                                        value={item.value}
                                        label={item.label}
                                        key={key + item.value}
                                    />
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
            {
                restaurantsList.length !== 0 ?
                    <Items 
                        items={restaurantsList}
                        sortByFavorite={sortByFavorite}
                        handleClickFavorite={handleClickFavorite}
                    /> :
                    <h2 className="empty-result">No restaurants found. Try again.</h2>
            }
        </div>
    )
}

export default Listing;