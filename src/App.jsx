import { useState, useContext, createContext } from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Detector } from "./components/Detector";
import { Scanner } from "./components/Scanner";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";

const Context = createContext();

export const useAppContext = () => {
  return useContext(Context);
};

function App() {
  const [value1, setValue1] = useState("Value 2");
  const [email, setEmail] = useState("email");
  const [pass, setPass] = useState("pass");
  const [name, setName] = useState("name");
  return (
    <div>
      <Context.Provider
        value={{
          name,
          setName,
          email,
          setEmail,
          pass,
          setPass,
          value1,
          setValue1,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detector" element={<Detector />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
