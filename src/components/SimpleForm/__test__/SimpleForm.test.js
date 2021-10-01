import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SimpleForm from '../SimpleForm';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from 'react-router-dom';

describe("SimpleForm", () => {
  it("should render all the fields", () => {
    const component = render(
        <Router>
          <SimpleForm/>
        </Router>);
    const eventDateEl = component.getByTestId('eventDate');
    expect(eventDateEl).toBeInTheDocument();
    const buttonEl = component.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
    const emailEl = component.getByTestId('email');
    expect(emailEl).toBeInTheDocument();
    const surnameEl = component.getByTestId('surname');
    expect(surnameEl).toBeInTheDocument();
    const nameEl = component.getByTestId('name');
    expect(nameEl).toBeInTheDocument();
  });

  it("should submit correct form data", async () => {
    const mockSave = jest.fn();
    const component = render(
        <Router>
          <SimpleForm saveData={mockSave}/>
        </Router>);
    const nameInput = component.getByTestId('name');
    const surnameInput = component.getByTestId('surname');
    const emailInput = component.getByTestId('email');
    const eventDateInput = component.getByTestId('eventDate');
    const form = component.getByTestId('form');

    fireEvent.change(nameInput, {target: {value: "Jane"}});
    fireEvent.change(surnameInput, {target: {value: "Smith"}});
    fireEvent.change(emailInput, {target: {value: "janesmith@gmail.com"}});
    fireEvent.change(eventDateInput, {target: {value: "2010-01-01"}});

    await fireEvent.submit(component.getByText(/Add/i));
    await waitFor(() =>
        expect(mockSave).toHaveBeenCalledWith({
          name: "Jane",
          surname: "Smith",
          email: "janesmith@gmail.com",
          eventDate: "2010-01-01",
          "submitted": false
        })
    );
  });

  it("should not allow submit a form if name field is empty", async () => {
    const mockSave = jest.fn();
    const component = render(
        <Router>
          <SimpleForm saveData={mockSave}/>
        </Router>);
    const nameInput = component.getByTestId('name');
    const surnameInput = component.getByTestId('surname');
    const emailInput = component.getByTestId('email');
    const eventDateInput = component.getByTestId('eventDate');
    const form = component.getByTestId('form');

    fireEvent.change(nameInput, {target: {value: ""}});
    fireEvent.change(surnameInput, {target: {value: "Smith"}});
    fireEvent.change(emailInput, {target: {value: "janesmith@gmail.com"}});
    fireEvent.change(eventDateInput, {target: {value: "2010-01-01"}});

    await fireEvent.submit(component.getByText(/Add/i));
    expect(mockSave).not.toBeCalled();
  });
  
   it("should not allow submit a form if surname field is empty", async () => {
    const mockSave = jest.fn();
    const component = render(
        <Router>
          <SimpleForm saveData={mockSave}/>
        </Router>);
    const nameInput = component.getByTestId('name');
    const surnameInput = component.getByTestId('surname');
    const emailInput = component.getByTestId('email');
    const eventDateInput = component.getByTestId('eventDate');
    const form = component.getByTestId('form');

    fireEvent.change(nameInput, {target: {value: "Jane"}});
    fireEvent.change(surnameInput, {target: {value: ""}});
    fireEvent.change(emailInput, {target: {value: "janesmith@gmail.com"}});
    fireEvent.change(eventDateInput, {target: {value: "2010-01-01"}});

    await fireEvent.submit(component.getByText(/Add/i));
    expect(mockSave).not.toBeCalled();
  });
  
  it("should not allow submit a form if email field is not valid", async () => {
    const mockSave = jest.fn();
    const component = render(
        <Router>
          <SimpleForm saveData={mockSave}/>
        </Router>);
    const nameInput = component.getByTestId('name');
    const surnameInput = component.getByTestId('surname');
    const emailInput = component.getByTestId('email');
    const eventDateInput = component.getByTestId('eventDate');
    const form = component.getByTestId('form');

    fireEvent.change(nameInput, {target: {value: "Jane"}});
    fireEvent.change(surnameInput, {target: {value: "Smith"}});
    fireEvent.change(emailInput, {target: {value: "janesmith"}});
    fireEvent.change(eventDateInput, {target: {value: "2010-01-01"}});

    await fireEvent.submit(component.getByText(/Add/i));
    expect(mockSave).not.toBeCalled();
  });
  
  it("should not allow submit a form if eventDate field is empty", async () => {
    const mockSave = jest.fn();
    const component = render(
        <Router>
          <SimpleForm saveData={mockSave}/>
        </Router>);
    const nameInput = component.getByTestId('name');
    const surnameInput = component.getByTestId('surname');
    const emailInput = component.getByTestId('email');
    const eventDateInput = component.getByTestId('eventDate');
    const form = component.getByTestId('form');

    fireEvent.change(nameInput, {target: {value: "Jane"}});
    fireEvent.change(surnameInput, {target: {value: "Smith"}});
    fireEvent.change(emailInput, {target: {value: "janesmith@gmail.com"}});
    fireEvent.change(eventDateInput, {target: {value: ""}});

    await fireEvent.submit(component.getByText(/Add/i));
    expect(mockSave).not.toBeCalled();
  });
});