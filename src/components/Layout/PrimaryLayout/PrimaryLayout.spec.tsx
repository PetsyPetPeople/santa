import { screen } from '@testing-library/react';

describe('<PrimaryLayout />', () => {
  it('should render the heading', () => {
    expect(screen.getByRole('heading', { name: /PrimaryLayout/i })).toBeInTheDocument();
  });
});
