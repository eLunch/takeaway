import * as React from 'react';
import { shallow } from 'enzyme';

import Items from '../../../src/components/Items';
import data from '../../../src/assets/data';

const props = {
    items: data.restaurants,
    sortByFavorite: [],
    handleClickFavorite: jest.fn()
}
const component = shallow(<Items {...props} />);

describe('Items', () => {
    it('should call handleClickFavorite', () => {

        // Act
        component.find('.icon-link').at(1).simulate('click');

        // Assert
        expect(props.handleClickFavorite).toHaveBeenCalledTimes(1);
    });
});