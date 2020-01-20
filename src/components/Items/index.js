import React from 'react';
import StarRatings from 'react-star-ratings';

import './styles.scss';
import favorite from '../../assets/image/favorite.svg';
import favoriteFull from '../../assets/image/favorite-full.svg';
import cafeIcon from '../../assets/image/cafe.png';
import distance from '../../assets/image/location.svg';
import delivery from '../../assets/image/delivery.svg';
import time from '../../assets/image/time.svg';
import costs from '../../assets/image/costs.svg';
import { priceFormat, distanceFormat, capitalize } from '../../helpers';


const Items = ({ items, sortByFavorite, handleClickFavorite }) => {
    return (
        <div className="lists">
            {items.map((item, key) => {
                let colorStatus = item.status === 'closed' ? '#ff4246' : '#10d365';
                return (
                    <div key={key} className="item">
                        <div className="item-photo">
                            <img src={"../../assets/image/cafe.png"} alt="Cafe Image" className="image" />
                            <div className="rating">
                                <StarRatings
                                    rating={item.sortingValues.ratingAverage}
                                    starRatedColor="#ff8000"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="15px"
                                    starSpacing="0"
                                />
                                <span>({item.sortingValues.ratingAverage})</span>
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="name">{item.name}</div>
                            <div className="status">
                                <svg fill={colorStatus} height="12px" width="12px" id="Livello_1" version="1.1" viewBox="0 0 141.732 141.732" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Livello_5">
                                        <path d="M113.326,70.191c0-2.97-2.377-5.376-5.307-5.376H75.543V32.387v-0.001c0-2.98-2.418-5.397-5.396-5.397   c-2.98,0-5.398,2.417-5.398,5.397V70.17c0,2.981,2.418,5.398,5.398,5.398h37.875C110.949,75.568,113.326,73.161,113.326,70.191    M129.533,70.157c0,32.798-26.584,59.386-59.375,59.386c-32.793,0-59.375-26.588-59.375-59.386s26.582-59.386,59.375-59.386   C102.949,10.771,129.533,37.359,129.533,70.157 M140.314,70.157C140.314,31.41,108.904,0,70.158,0C31.41,0,0,31.41,0,70.157   s31.41,70.157,70.158,70.157C108.904,140.314,140.314,108.904,140.314,70.157"/>
                                    </g>
                                </svg>
                                <span style={{color: colorStatus}}>{capitalize(item.status)}</span>
                            </div>
                            <table className="table-extra-info">
                                <tbody>
                                    <tr>
                                        <td>Best match: </td>
                                        <td>{item.sortingValues.bestMatch}</td>
                                    </tr>
                                    <tr>
                                        <td>Newest: </td>
                                        <td>{item.sortingValues.newest}</td>
                                    </tr>
                                    <tr>
                                        <td>Popularity: </td>
                                        <td>{item.sortingValues.popularity}</td>
                                    </tr>
                                    <tr>
                                        <td>Average price: </td>
                                        <td>{item.sortingValues.averageProductPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="sub-info">
                                <div className="pictogram pictogram-distance">
                                    <img src={distance} alt="Distance Image" className="icon icon-distance" />
                                    {distanceFormat(item.sortingValues.distance)}km
                                </div>
                                <div className="pictogram pictogram-deliveryCosts">
                                    <img src={delivery} alt="Delivery Image" className="icon icon-distance" />
                                    {item.sortingValues.deliveryCosts ? 
                                        `€ ${priceFormat(item.sortingValues.deliveryCosts)}` :
                                        `FREE`}
                                </div>
                                <div className="pictogram pictogram-costs">
                                    {item.sortingValues.minCost ? 
                                            <div><img src={costs} alt="Costs Image" className="icon icon-costs" />
                                            € {priceFormat(item.sortingValues.minCost)} </div>
                                         : null
                                    }
                                </div>
                                <div className="icon-box" onClick={() => handleClickFavorite(item.name)}>
                                    {
                                        sortByFavorite.includes(item.name) ?
                                        <img src={favoriteFull} alt="Favorite full Image" className="icon-favorite" /> :
                                        <img src={favorite} alt="Favorite Image" className="icon-favorite" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Items;