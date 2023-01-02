import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Pay from "./components/Pay/Pay";
import Budgets from "./components/Budgets/Budgets";
import Cards from "./components/Cards/Cards";
import { useContext } from "react";
import { LoginContext } from "./store/LoginContext";
import Save from "./components/Home/Save/Save";
import Borrow from "./components/Home/Borrow/Borrow";
import Spend from "./components/Home/Spend/Spend";
import Transactions from "./components/Budgets/Transactions/Transactions";
import Overview from "./components/Budgets/Overview/Overview";
import Budget from "./components/Budgets/Budget/Budget";
import Account from "./components/Account/Account";
import Add from "./components/Add/Add";
import Savings from "./components/Savings/Savings";
import Register from "./components/Register/Register";

function App() {
  const loginCtx = useContext(LoginContext);

  return (
    <div style={{
      backgroundColor: loginCtx.darkMode ? "#121212" : "",
      color: loginCtx.darkMode ? "white" : "",
    }} className="App">
      <Routes>
        {<Route path="/login" element={<Login />} />}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/register" element={<Register />} />

        {loginCtx.loggedIn && (
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Spend />} />
            <Route path="/home/save" element={<Save />} />
            <Route path="/home/borrow" element={<Borrow />} />
          </Route>
        )}
        {loginCtx.loggedIn && <Route path="/add" element={<Add />} />}
        {loginCtx.loggedIn && <Route path="/savings" element={<Savings />} />}

        {loginCtx.loggedIn && <Route path="/pay" element={<Pay />} />}

        {loginCtx.loggedIn && (
          <Route path="/budgets" element={<Budgets />}>
            <Route path="/budgets" element={<Transactions />} />
            <Route path="/budgets/plan" element={<Budget />} />
            <Route path="/budgets/overview" element={<Overview />} />
          </Route>
        )}

        {loginCtx.loggedIn && <Route path="/cards" element={<Cards />} />}

        {loginCtx.loggedIn && <Route path="/account" element={<Account />} />}

        <Route
          path="*"
          element={
            loginCtx.loggedIn ? (
              <h1>Page Not Found</h1>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
