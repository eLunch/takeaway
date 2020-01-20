import * as React from 'react';
import { shallow } from 'enzyme';

import Listing from '../../../src/components/Listing';

describe('Filters', () => {
    it('should render as expected ', () => {
        const component = shallow(
            <Listing />
        );
    
        expect(component).toMatchSnapshot();
    });
});