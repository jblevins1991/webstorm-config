/**
 *  @jest-environment jsdom
 */
 import * as React from 'react';
 
 import {
    fireEvent,
    render
} from '@testing-library/react';

import Component from '../components/Component';

describe('Component component', () => {
    it('should render', () => {
        const { asFragment } = render(<Component />);
        
        expect(asFragment()).toBeInTheDocument();
    });
});