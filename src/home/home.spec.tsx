import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Home from './index';

describe('Component App', () => {
  test('Component render app', () => {
    const app = shallow(<ProviderMock><Home /></ProviderMock>);
    expect(app.length).toEqual(1);
  });
});

