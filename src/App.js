import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";
// import Menu from "./components/Menu";



function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route element={<Menu />}> */}
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
             <Route path="/profile/:id" element={<RequireAuth><Profile /></RequireAuth>} />
        
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
