import React from 'react';
import renderer from 'react-test-renderer';
import FundCard  from './fund-card-class';
import data from 'app/dummy-json.js'

describe('fund analysis lists', () => {
    it('test to see if the fund cards renders correctly', () => {
        const tree = renderer
        .create(<FundCard {...data[0]} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});