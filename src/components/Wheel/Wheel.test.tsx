import React from 'react';
import { shallow } from 'enzyme';

import Wheel from './Wheel';

describe('<Wheel />', () => {
    it('should contain 4 images', () => {
        const comp = <Wheel randomIndex={0} />;
        const wrapper = shallow(comp);
        expect(wrapper.find('img').length).toEqual(4);
    });
});
