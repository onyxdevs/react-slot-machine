import React from 'react';
import { shallow } from 'enzyme';

import Message, { winnerMessages } from './Message';

describe('<Message />', () => {
    it('should render full match message if score is full', () => {
        const comp = <Message score='full' />;
        const wrapper = shallow(comp);
        expect(wrapper.text()).toEqual(winnerMessages.full);
    });

    it('should render consecutive message if score is consecutive', () => {
        const comp = <Message score='consecutive' />;
        const wrapper = shallow(comp);
        expect(wrapper.text()).toEqual(winnerMessages.consecutive);
    });

    it('should render inconsecutive message if score is inconsecutive', () => {
        const comp = <Message score='inconsecutive' />;
        const wrapper = shallow(comp);
        expect(wrapper.text()).toEqual(winnerMessages.inconsecutive);
    });

    it('should render some loser message if score is empty', () => {
        const comp = <Message score='' />;
        const wrapper = shallow(comp);
        expect(wrapper.text()).toBeTruthy();
    });
});
