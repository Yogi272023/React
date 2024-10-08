import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResListData"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it ("Should Search Res list for burger text input",async ()=>{
    await act( async()=> render(
    <BrowserRouter>
     <Body/>
    </BrowserRouter>
))
   const cardsBeforeSearch= screen.getAllByTestId("resCard");
   expect (cardsBeforeSearch.length).toBe(8);
   const searchBtn=screen.getByRole("button",{name:"Search"});
   const searchInput= screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target:{value:"burger"}});
   fireEvent.click(searchBtn);
   const card= screen.getAllByTestId("resCard");//give all cards having this testid
   expect (card.length).toBe(1);
})

it("Should filter top rated restaurant", async ()=>{
   await act(async()=>render(
   <BrowserRouter>
     <Body/>
   </BrowserRouter>
   ))
   const cardBeforeFilter=screen.getAllByTestId("resCard");
   expect (cardBeforeFilter.length).toBe(8);
   const topRatedResBtn= screen.getByRole("button",{name:"Top Rated Restaurants"});
   fireEvent.click(topRatedResBtn);
   const cardAfterFilter=screen.getAllByTestId("resCard");
   expect (cardAfterFilter.length).toBe(3);
})

it("Should filter top rated restaurant", async ()=>{
    await act(async()=>render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>
    ))
    const cardBeforeFilter=screen.getAllByTestId("resCard");
    expect (cardBeforeFilter.length).toBe(8);
    const topRatedResBtn= screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topRatedResBtn);
    const cardAfterFilter=screen.getAllByTestId("resCard");
    expect (cardAfterFilter.length).toBe(3);
 })

 it ("Should render online status",async ()=>{
    await act(async()=>render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
        ))
        
 })