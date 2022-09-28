import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./AllRoutes/MainRoutes";
import PackageNavbar from "./Components/PackageNavbar/PackageNavbar";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <PackageNavbar/>
      <MainRoutes />
    </div>
  );
}

export default App;
