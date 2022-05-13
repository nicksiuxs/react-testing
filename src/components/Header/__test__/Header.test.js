import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe("Header component", () => {
    it('Should render same text passed into title prop getByTex', async () => {
        render(<Header title="My header" />);
        const headingElement = screen.getByText(/MY header/i);

        expect(headingElement).toBeInTheDocument();
    });
})

// it('Should render same text passed into title prop getByTitle', async () => {
//     render(<Header title="My header" />);
//     const headingElement = screen.getByTitle("header");

//     expect(headingElement).toBeInTheDocument();
// });

// it('Should render same text passed into title prop getByRole with params', async () => {
//     render(<Header title="My header" />);
//     const headingElement = screen.getByRole("heading", {name: "My header"});

//     expect(headingElement).toBeInTheDocument();
// });

// it('Should render same text passed into title prop getById', async () => {
//     render(<Header title="My header" />);
//     const headingElement = screen.getByTestId("header");

//     expect(headingElement).toBeInTheDocument();
// });

// //FIND
// it('Should render same text passed into title prop findBy', async () => {
//     render(<Header title="header" />);
//     const headingElement = await screen.findByText("header");

//     expect(headingElement).toBeInTheDocument();
// });

// // Query
// it('Should render same text passed into title prop getByQuery', async () => {
//     render(<Header title="My header" />);
//     const headingElement = screen.queryByText(/dogs/i);

//     expect(headingElement).not.toBeInTheDocument();
// });

// // Get by all
// it('Should render same text passed into title prop getAllBy', async () => {
//     render(<Header title="My header" />);
//     const headingElements = screen.getAllByRole("heading");

//     expect(headingElements.length).toBe(2);
// });