import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
