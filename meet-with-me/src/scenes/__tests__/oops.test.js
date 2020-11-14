import { render, screen } from '@testing-library/react';
import Oops from '../oops';

test('renders the about title', () => {
  render(<Oops />);
  const titleElement = screen.getByText(/Oops/i);
  expect(titleElement).toBeInTheDocument();
});
