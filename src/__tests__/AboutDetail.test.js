import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import AboutDetail from '../components/Userdetail/Aboutdetail';


test('renders AboutDetail component with buttons and navigates correctly', () => {
      <AboutDetail />

      waitFor(()=>{
        expect(getByText('Menu and User Details')).toBeInTheDocument();
        const menuButton = getByText('Menu');
        expect(menuButton).toBeInTheDocument();
        fireEvent.click(menuButton);
        expect(window.location.pathname).toBe('/homefood');
        const userDetailButton = getByText('Userdetail');
        expect(userDetailButton).toBeInTheDocument();
        fireEvent.click(userDetailButton);
        expect(window.location.pathname).toBe('/users');
      })

});
