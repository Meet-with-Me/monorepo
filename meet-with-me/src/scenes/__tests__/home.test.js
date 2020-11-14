import { render, screen } from '@testing-library/react';
import Home from '../home';

describe('Home', () => {
  it('renders the home title', () => {
    render(<Home />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
