import Logo from "/logo.svg";
import "./App.css";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";
/**
 * TODO:
 * 1. Create Custom hook is call useFriends with these features:
 *   - Fetch data from endpoint
 *   - Pagination with data from endpoint, pls take care best practice for pagination
 *   => Here is  endpoint you can use:
 *    - https://dummyjson.com/users?limit=5&skip=0&select=id,firstName,lastName,maidenName,age
 * 2. Apply above custom hook:
 *   - Show list of friends with 2 button Next, Previous for pagination
 *   - Show error message by using <Error /> component, show <Loading /> component while fetching data
 *
 */

const App = () => {
  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <h1>Social Network App</h1>
      <div>
        <h3>friends?</h3>
        {/* load list friend heres */}
        <div className="pagination">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
};

export default App;
