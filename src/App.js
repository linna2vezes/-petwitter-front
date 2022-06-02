import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";



function App() {
  return (
    <AuthProvider>
      <Routes>
       
          <Route path="/" element={
          <RequireAuth>
            <Home />
            </RequireAuth>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          
           </Routes>
    </AuthProvider>
  );
}

export default App;
