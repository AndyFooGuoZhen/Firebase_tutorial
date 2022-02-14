import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
