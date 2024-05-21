import Logo from "/logo.svg";
import "./App.css";

/**
 * TODO:
 * 1. Create Custom hook is call useFriends with these features:
 *   - Fetch data from endpoint
 *   - Pagination with data from endpoint
 *   - Support search via api
 *   => Here is 2 endpoint you can use:
 *   - https://dummyjson.com/users?limit=5&skip=0&select=id,firstName,lastName,maidenName,age
 *   - https://dummyjson.com/users/search?q=ann&limit=5&skip=0&select=id,firstName,lastName,maidenName,age
 * 2. Create Friends component and apply above custom hook:
 *   - Show list of friends with 2 button Next, Previous for pagination
 *   - Show search input for searching friends
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
        {/* Please add Friends Component here */}
      </div>
    </>
  );
};

export default App;
