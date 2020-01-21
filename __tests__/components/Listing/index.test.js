import * as React from 'react';
import { shallow } from 'enzyme';

import Listing from '../../../src/components/Listing';

const component = shallow(<Listing />);

describe('Listing', () => {
    it('should change search input', () => {

        // Act
        component.find('input').simulate('change', {target: {value: 'Test'}});

        // Assert
        expect(component.find('input').prop('value')).toBe('Test');

    });

    it('should change sort select', () => {

        // Act
        component.find('select').simulate('change', {target: {value: 'Newest'}});

        // Assert
        expect(component.find('select').prop('value')).toBe('Newest');

    });
});