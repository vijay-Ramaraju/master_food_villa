import { useContext } from "react"
import UserContext from "../../Utils/UserContext"

const About = () => {
    const {loggedInUser} = useContext(UserContext)
    return (
      <div className="font-semibold h-full flex flex-col text-2xl justify-center items-center">
        <h1>Hello {loggedInUser}</h1>
        <h1>This is About of the Master Food Villa Page</h1>
        <h2>Thanks for Visit this Page</h2>
      </div>
    );
}
export default About