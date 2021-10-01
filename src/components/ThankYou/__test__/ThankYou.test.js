import React from 'react';
import { render, screen } from '@testing-library/react';
import ThankYou from '../ThankYou';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from 'react-router-dom';

describe("ThankYou", () => {
  it('should render a link correclty', () => {
    const component = render(
        <Router>
          <ThankYou />
        </Router>);
    const linkElement = component.getByText(/Add more/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render a header with correct text', () => {
    const {getByTestId} = render(
        <Router>
          <ThankYou />
        </Router>);
    const headerEl = getByTestId('success_header');
    expect(headerEl.textContent).toBe('The event has been added to the database.');
  });
});