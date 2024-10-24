import RestaurantCard from '../Body/RestaurantCard'
import { render, screen } from '@testing-library/react'
import MOCK_DATA from '../mocks/restaurantMock'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

it("Should render the Restaurant Card", () => {
   
    render(
        <BrowserRouter >
            <RestaurantCard each={MOCK_DATA} />
        </BrowserRouter>
    )
    
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument()

});