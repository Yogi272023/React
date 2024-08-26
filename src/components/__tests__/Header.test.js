import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it ("Should render Header Component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton= screen.getByRole("button",{name:"Login"});
    expect (loginButton).toBeInTheDocument();
})

it ("Should render Header Component with a Cart items 0",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const cartItems= screen.getByText("🛒-(0 items)");
    // const cartItems= screen.getByText(/Cart/); using regex
    expect (cartItems).toBeInTheDocument();
})

 it ("Should render Header Component with online status",()=>{
     render(
         <BrowserRouter>
         <Provider store={appStore}>
             <Header/>
         </Provider>
         </BrowserRouter>
     );
     const onlineStatus=screen.getByTestId("statusCheck");
     expect (onlineStatus).toBeInTheDocument();
 })

 it ("Should render Header Component with offline status",()=>{
     render(
         <BrowserRouter>
         <Provider store={appStore}>
             <Header/>
         </Provider>
         </BrowserRouter>
     );
     const status=screen.getByTestId("statusCheck");
     fireEvent.online(status);
     console.log(status)
 })

it ("Should should change Login Button to Logout on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton= screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton= screen.getByRole("button",{name:"Logout"});
    expect (logoutButton).toBeInTheDocument();
})

it ("Should should change Logout Button to Login on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton= screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton= screen.getByRole("button",{name:"Logout"});
    expect (logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    expect(loginButton).toBeInTheDocument();
})