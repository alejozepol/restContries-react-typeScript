/* eslint-disable react/destructuring-assignment */
import React, { ReactNode } from 'react';

export interface ProviderMockProps {
  children:ReactNode
}

// eslint-disable-next-line react/jsx-no-useless-fragment
const ProviderMock = ({ children }:ProviderMockProps) => <>{children}</>;

export default ProviderMock;
