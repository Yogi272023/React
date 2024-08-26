import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page test cases",()=>{
    test ("Should load Contact Us Component",()=>{
        render (<Contact/>); // first render to jsdom
        const heading=screen.getByRole("heading");
        expect (heading).toBeInTheDocument();
    })
    
    test ("Should load button inside Contact Us Component",()=>{
        render (<Contact/>); // first render to jsdom
        const button=screen.getByRole("button");
        expect (button).toBeInTheDocument();
    })
    
    test ("Should load button inside Contact Us Component",()=>{
        render (<Contact/>); // first render to jsdom
        const button=screen.getByText("Submit");// finding button with text submit on it 
        expect (button).toBeInTheDocument();
    })
    
    test ("Should load input name inside Contact Us Component",()=>{
        render (<Contact/>); // first render to jsdom
        const inputName=screen.getByPlaceholderText("name");// this is querying
        expect (inputName).toBeInTheDocument();// Assertion
    })
    
    test ("Should load 2 input boxes on the Contact Component",()=>{
        render (<Contact/>); // first render to jsdom
        const inputBoxes=screen.getAllByRole("textbox");
        expect (inputBoxes.length).toBe(2);
    })
})
