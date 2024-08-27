import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Header />);

    const heading = screen.getByText('Catalog');

    expect(heading).toBeInTheDocument();
  });
});
