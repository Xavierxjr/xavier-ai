import React from 'react'
import ReactDOM from 'react-dom'
import Switch from "../../App"
import Router from "../../App"
import Navbar from "../../App"

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router></Router>, div)
})

it("should render my component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Switch></Switch>, div)
})

it("should render initial layout", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navbar></Navbar>, div)
})