import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    beforeAll(() => {
        console.log("antes que todo")
    })

    beforeEach(() => {
        console.log("empecé un test ")
    })

    afterAll(() => {
        console.log("después de todos los test")
    })

    afterEach(() => {
        console.log("después de cada test")
    })


    it('should render a follower items', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });
})