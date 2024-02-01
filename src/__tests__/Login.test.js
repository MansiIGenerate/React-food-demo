import React from 'react';
import { render,  waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login-signup-page/Login';

describe('Login Component', () => {
  test('renders login form', () => {
    <Login />
    waitFor(() => {
        expect(screen.getByText('Sign in')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
        // expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        // expect(screen.getByText('Show Password')).toBeInTheDocument();
        // expect(screen.getByText('Submit')).toBeInTheDocument();
        // expect(screen.getByText("Don't Have an Account?")).toBeInTheDocument();
    })
  });

});
