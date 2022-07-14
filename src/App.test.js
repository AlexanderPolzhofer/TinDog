import { render, screen } from '@testing-library/react';
import App from './App';

test('testing brand name:', () => {
  render(<App />);
  const text = screen.getByText('tinDog');
  expect(text).toBeInTheDocument();
});
