import { render, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import { act } from 'react'
import Contact from '../Contact/Contact'

describe("Should Test the contact page", () => {
    test("Should load Contact us component", () => {
      act(() => {
        render(<Contact />);    
        })
        
      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    test("Should load input from Contact us component", () => {
      render(<Contact />);
      const inputEle = screen.getAllByRole("textbox");
      expect(inputEle.length).toBe(2);
    });
    test("Should load input placeholder from Contact us component", () => {
      render(<Contact />);
      const inputText = screen.getByPlaceholderText("name");
      expect(inputText).toBeInTheDocument();
    });
})
