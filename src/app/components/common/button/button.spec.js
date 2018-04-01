
import React from 'react';
import { shallow } from 'enzyme';
import Button from './ButtonClass.jsx';

describe('Button', () => {
    
    const mockFn = jest.fn();

    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <Button className='success fx-btn'>Click</Button>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should have a button class', () => {
        const tree = shallow(
            <Button className='success fx-btn'>Click</Button>
        );
        expect(typeof(tree.find('.fx-btn').node.props.value)).toBe('string');
        expect(tree.find('.fx-btn').node.props.value).toEqual('success fx-btn');
    });

    it('should call mock function when button is clicked', () => {
        const tree = shallow(
            <Button name='success fx-btn' onClick={mockFn}>Click</Button>
        );
        tree.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

});