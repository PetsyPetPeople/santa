import { screen } from '@testing-library/react';

describe('<BlankLayout />', () => {
  it('should render the heading', () => {
    expect(screen.getByRole('heading', { name: /BlankLayout/i })).toBeInTheDocument();
  });
});
