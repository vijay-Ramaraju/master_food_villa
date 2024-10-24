
import Body from "../Body/Body";
import { render,screen,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {act} from 'react'
import MOCK_DATA from '../mocks/restaurantListMockData.json'
//Mock Function for Fetching data
import { BrowserRouter } from 'react-router-dom'
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        },
    });
})

it("should render the burger cards when i search with name burger", async() => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
      // Adjusted part for querying the search input
    //   const searchButton = screen.getByTestId("search");
    //   expect(searchButton).toBeInTheDocument();
    })
    
    
})