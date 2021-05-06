import React from 'react';
import { shallow } from 'enzyme';

import SlotMachine from './SlotMachine';
import Button from 'components/Button';

describe('<SlotMachine />', () => {
    const comp = <SlotMachine />;
    const wrapper = shallow(comp);

    it('should render 3 wheels', () => {
        expect(wrapper.find('Wheel').length).toBe(3);
    });

    it('should render 2 buttons', () => {
        expect(wrapper.find('Button').length).toBe(2);
    });

    it('should not render a message initially', () => {
        expect(wrapper.find('Message').length).toBe(0);
    });

    it('should make buttons disabled on click', () => {
        wrapper.find(Button).at(0).shallow().simulate('click');
        expect(wrapper.find(Button).at(0).prop('disabled')).toEqual(true);

        wrapper.find(Button).at(1).shallow().simulate('click');
        expect(wrapper.find(Button).at(1).prop('disabled')).toEqual(true);
    });
});
