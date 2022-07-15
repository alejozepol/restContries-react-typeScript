import React from 'react';
import { render } from '@testing-library/react';x

import App from '.';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Welcome to parners-bussiness!')).toBeTruthy();
  });
});
