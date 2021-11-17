import React from 'react'
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'

const TestNavbar = () => {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )
}

describe("Navbar", () => {
    it('should render navbar items', async () => {
        render(<TestNavbar />);
        const navbarDivElement = await screen.findByTestId("menu-item-0")
        expect(navbarDivElement).toBeInTheDocument();
    });

    it('should render multiple follower items', async () => {
        render(<TestNavbar />);
        const navbarDivElement = await screen.findAllByTestId(/menu-item/i)
        expect(navbarDivElement.length).toBe(4);
    })
})
