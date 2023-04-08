import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {;
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialVal = screen.getByText(/0/i);
  expect(initialVal).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'))
  const newVal = screen.getByText(/1/i);
  expect(newVal).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'))
  const newVal = screen.getByText(/-1/i);
  expect(newVal).toBeInTheDocument();
});
