import NavBar from "./Components/Navbar";
import HomePage from "./Components/Homepage";
import Data from "./Components/api/Data";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage user={Data.user} workouts={Data.workouts}/>
    </div>
  );
}

export default App;
