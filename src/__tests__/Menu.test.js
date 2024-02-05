// import React from 'react';
// import {fireEvent, waitFor } from '@testing-library/react';
// import { Contextapp } from '../components/restaurants/mainFood/ContextFood';
// import Menu from '../components/restaurants/mainFood/Menu';

// jest.mock('../mainFood/ContextFood', () => ({
//   ...jest.requireActual('../mainFood/ContextFood'),
//   useContext: jest.fn(),
// }));


// test('renders Menu component with correct content and handles clicks', () => {
//   const addtocardMock = jest.fn();
//   const useContextMock = jest.fn(() => ({
//     addtocard: addtocardMock,
//     added: null,
//   }));
//   useContextMock.Contextapp = { addtocard: addtocardMock, added: null };
//   Contextapp.mockImplementation(useContextMock);
//   <Menu />
//   waitFor(() => {
//     expect(screen.getByText('Menu')).toBeInTheDocument();
//     expect(screen.getByText('Pizza')).toBeInTheDocument();
//     fireEvent.click(screen.getByText('Pizza'));
//     expect(screen.getByText('Spicy:')).toBeInTheDocument();
//     expect(screen.getByText('Vegetarian:')).toBeInTheDocument();
//     fireEvent.click(screen.getByText('add to cart'));
//     expect(addtocardMock).toHaveBeenCalled();
//   })

// });
