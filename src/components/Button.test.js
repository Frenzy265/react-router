import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button.stories';

it('renders the Add Button', () => {
  render(<Button />);
  expect(screen.getByRole('button')).toHaveTextContent('+');
});
