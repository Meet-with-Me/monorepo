import { render, screen } from '@testing-library/react';
import About from '../about';

describe('About', () => {
  it('renders the about title', () => {
    render(<About />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
