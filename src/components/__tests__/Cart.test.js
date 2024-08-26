import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it ("Should load Restaurant Menu Component",async()=>{
    await act(async()=>render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
    </Provider>
    </BrowserRouter>
    ))
    const accordianHeader=screen.getByText("Pot Rice (3)");
    fireEvent.click(accordianHeader);

    const allFoodItems=screen.getAllByTestId("foodItems");
    expect (allFoodItems.length).toBe(3);

    const addBtns= screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtns[0]);

    const headerItem= screen.getByText("🛒-(1 items)");
    expect(headerItem).toBeInTheDocument();

    fireEvent.click(addBtns[0]);
    const secondItem= screen.getByText("🛒-(2 items)");
    expect(secondItem).toBeInTheDocument();

    const selectedFoodItems=screen.getAllByTestId("foodItems");
    expect(selectedFoodItems.length).toBe(5);

    const clearBtn= screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(clearBtn);

    const reducedFoodItem= screen.getAllByTestId("foodItems");
    expect(reducedFoodItem.length).toBe(3);

    const cartEmptyText= screen.getByText("Cart is empty. Please add items to the cart!!");
    expect(cartEmptyText).toBeInTheDocument();

})