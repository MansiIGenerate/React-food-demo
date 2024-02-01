import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registeruppage from "../components/Login-signup-page/Registeruppage";

const addDataMock = jest.fn();

describe(" Component", () => {
  test("login form", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByText("Sign Up")).toBeInTheDocument();
      // expect(screen.getByText('Sign Up')).toMatchSnapshot();
    });
  });

  test("login form enter name", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(
        screen.getByPlaceholderText("Enter Your Name")
      ).totoBeInTheDocument();
    });
  });

  test("login form Enter email", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByPlaceholderText("Enter email")).totoBeInTheDocument();
    });
  });
  test("login form Enter email when email is empty", () => {
    const email = 'mansi@getDefaultNormalizer.com';
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    });
  });

  test("login form date", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByPlaceholderText("date")).totoBeInTheDocument();
    });
  });

  test("login form enter Password", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByPlaceholderText("Password")).totoBeInTheDocument();
    });
  });

  test("renders checkbox and toggles show password", () => {
    <Registeruppage />;
    waitFor(() => {
      const checkbox = screen.getByLabelText("Show Password");
      expect(checkbox).not.toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  test("clicking the button triggers the addData function", () => {
    <Registeruppage addData={addDataMock} />; // Update with the actual component rendering your form
    waitFor(() => {
      const submitButton = screen.getByTestId("submitbtn"); // Update with the actual text content of your button
      fireEvent.click(submitButton);
      expect(addDataMock).toHaveBeenCalled();
    });
  });
});
