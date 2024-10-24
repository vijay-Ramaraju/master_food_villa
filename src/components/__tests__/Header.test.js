import Header from '../Header/Header'
import { Provider } from 'react-redux';
import appStore from '../../Utils/Redux/appStore'
import '@testing-library/jest-dom'
import { fireEvent, render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';


it("Should render the Header Component with Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    );

    //Querrying
    const LoginButton = screen.getByRole("button")
    //Assertion
    expect(LoginButton).toBeInTheDocument();
});

it("Should render the Header Component with Cart Text", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querrying
    //   const cartText = screen.getByText('Cart 0 items');
    const cartText = screen.getByText(/Cart/); //Using Regex
  //Assertion
  expect(cartText).toBeInTheDocument();
});

//It is not working because when i click on the login button it move to login page and on fill the username and mail then it change to logout
// it("Should render the Logout Button When we click on the Login button", async () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
// 
//   //Querrying
//     const LoginButton = screen.getByRole("button",{name:"Login"});
//     fireEvent.click(LoginButton)
//     const LogOutButton = await screen.findByRole("button", { name: "Logout" });
//   //Assertion
//   expect(LogOutButton).toBeInTheDocument();
// });