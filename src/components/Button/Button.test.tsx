import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
    it('should be disabled when disabled is true', () => {
        const comp = <Button title='Stop It' disabled={false} onClick={jest.fn()} />;
        const wrapper = shallow(comp);
        expect(wrapper.find('button[disabled=false]').length).toBe(1);
    });

    it('should be null when there is no title', () => {
        const comp = <Button title='' onClick={jest.fn()} />;
        const wrapper = shallow(comp);
        expect(wrapper.find('button').length).toBe(0);
    });

    it('should render successfully with title', () => {
        const comp = <Button title='Awesome title' onClick={jest.fn()} />;
        const wrapper = shallow(comp);
        expect(wrapper.text()).toEqual('Awesome title');
    });

    it('should excute a function on click', () => {
        const mockFn = jest.fn();
        const comp = <Button title='Awesome title' onClick={mockFn} />;
        const wrapper = shallow(comp);
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});
