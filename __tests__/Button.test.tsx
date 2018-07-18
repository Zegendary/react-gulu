import * as React from 'react';
import * as enzyme from 'enzyme';

import Button from '../src/components/Button/Button'

it('renders the correct text when children is given', () => {
    const button = enzyme.shallow(<Button>你好</Button>);
    expect(button.text()).toEqual('你好')
});