import Logo from "/logo.svg";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <h1>Social Network App</h1>
      <div>
        <h3>Maybe friends?</h3>
        {/*
          TODO: show people who may be friends

          you can get date from the below endpoint:
          https://private-e843bc-betamindhiring.apiary-mock.com/users/1/maybe_friends
        */}
      </div>
    </>
  );
};

export default App;
