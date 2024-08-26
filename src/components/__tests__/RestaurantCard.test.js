import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"

it ("Should render RestaurantCard Component with props data",()=>{
    render (<RestaurantCard resData={MOCK_DATA}/>);
    const name=screen.getByText("Chinese Wok");
    expect (name).toBeInTheDocument();
})