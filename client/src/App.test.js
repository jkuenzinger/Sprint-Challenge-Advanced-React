import React from 'react';
import Navbar from './components/Navbar.js'
import { render } from '@testing-library/react'

test('Navbar is rendering', () => {
  const {getByText} = render(<Navbar/>)
  getByText(/dark/i);
});


test('Darkmode is rendering properly', () => {
  const{getByTestId} = render(<Navbar/>)
  getByTestId(/darkmode/i)
})
