jest.mock('../ChildComponent', () => 'Spacer');

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ParentComponent from "../ParentComponent";

test('renders correctly', () => {
    const tree = renderer.create(
        <ParentComponent />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});