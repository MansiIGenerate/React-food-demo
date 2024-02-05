import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import Foodmaindetail from '../components/restaurants/Foodmaindetail'; 

test('renders Foodmaindetail component with routes', () => {
  <Foodmaindetail />

  waitFor(()=>{
      expect(screen.getByTestId('nevbar')).toBeInTheDocument();
      expect(screen.getByTestId('home')).toBeInTheDocument();
      expect(screen.getByTestId('menu')).toBeInTheDocument();
      expect(screen.getByTestId('cart')).toBeInTheDocument();
})
});
