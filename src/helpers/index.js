import { SORT_BY_DESC, STATUS_ID } from '../constants';

export const defaultSorting = (data) => {
    let result = data;

    // set new value top restaurant
    result.map((item) => {
        let sortingValues = item.sortingValues;
        return sortingValues.topRestaurants = (sortingValues.distance * sortingValues.popularity) + sortingValues.averageProductPrice;
    })

    // sorting by status
    result.sort((a, b) => STATUS_ID[a.status] - STATUS_ID[b.status]);

    // sorting by favorite
    result.sort((a, b) => b.isFavorite - a.isFavorite);

    return result;
}

export const sortingByField = (data, sortField, favoriteName=[]) => {
    let result = data;
    // sorting values ascending
    result.sort((a, b) => a.sortingValues[sortField] - b.sortingValues[sortField]);

    // sorting values descending
    if (SORT_BY_DESC.includes(sortField)) {
        result.reverse();
    }

    if(favoriteName) {
        return defaultSorting(result);
    }

    return result;
}

export const priceFormat = (price) => {
    let convert = price / 100;
    return Number(convert.toFixed(3));
}

export const distanceFormat = (distance) => {
    let km = distance / 1000;
    return Number(km.toFixed(1));
}

export const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}