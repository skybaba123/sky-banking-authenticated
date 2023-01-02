import { createContext, useCallback } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../http/http";

export const LoginContext = createContext({
  loggedIn: false,
  isLoggedIn: () => {},
  isLoggedOut: () => {},
  demoFill: () => {},
  emailChange: () => {},
  passwordChange: () => {},
  emailInput: "",
  passwordInput: "",
  currentName: "",
  currentLname: "",
  currentAccountBalance: Number,
  currentSavingBalance: Number,
  currentUserName: "",
  currentOwe: "",
  incraseBal: () => {},
  amountInput: Number,
  amountChange: () => {},
  currentAccountNumber: Number,
  accNumInput: "",
  accNumInputChange: () => {},
  transferSuccess: false,
  closeModal: () => {},
  transferError: false,
  loginError: false,
  signupFistNameInput: "",
  signupLastNameInput: "",
  signupUserNameInput: "",
  signupEmailInput: "",
  signupPasswordInput: "",
  signupConfirmPasswordInput: "",
  signupFistNameChange: () => {},
  signupLastNameChange: () => {},
  signupUserNameChange: () => {},
  signupEmailChange: () => {},
  signupPasswordChange: () => {},
  signupConfirmPasswordChange: () => {},
  signUpHandler: () => {},
  loginLoader: false,
  transDetails: false,
  transHandler: () => {},
  currentUserTran: [],
  beneficiary: "",
  darkModeHandler: () => {},
  darkMode: false,
});

const LoginContextProvider = ({ children }) => {
  //Create account inputs and states
  const [signupFistNameInput, setSignupFistNameInput] = useState("");
  const [signupLastNameInput, setSignupLastNameInput] = useState("");
  const [signupUserNameInput, setSignupUserNameInput] = useState("");
  const [signupEmailInput, setSignupEmailInput] = useState("");
  const [signupPasswordInput, setSignupPasswordInput] = useState("");
  const [signupConfirmPasswordInput, setSignupConfirmPasswordInput] =
    useState("");

  // login form input and states
  const [loggedIn, setLoggedIn] = useState();
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loginLoader, setLoginLoader] = useState(false);

  //Send Money input and states
  const [amountInput, setAmountInput] = useState("");
  const [accNumInput, setAccNumInput] = useState("");
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [transferError, setTransferError] = useState(false);
  const [transDetails, setTransDetails] = useState(false);

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [beneficiary, setBeneficiary] = useState("Beneficiary");

  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const emailData = localStorage.getItem("emailInput");
    const passData = localStorage.getItem("passwordInput");

    if (emailData && passData) {
      if (emailInput.trim().length <= 0 || passwordInput.trim().length <= 0)
        return;
      localStorage.setItem("emailInput", JSON.stringify(emailInput));
      localStorage.setItem("passwordInput", JSON.stringify(passwordInput));
    } else {
      localStorage.setItem("emailInput", JSON.stringify(""));
      localStorage.setItem("passwordInput", JSON.stringify(""));
    }
  }, [passwordInput, emailInput]);

  useEffect(() => {
    const emailData = localStorage.getItem("emailInput");
    const passData = localStorage.getItem("passwordInput");
    setEmailInput(JSON.parse(emailData));
    setPasswordInput(JSON.parse(passData));
  }, []);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(
      "https://skybank-56868-default-rtdb.firebaseio.com/users.json"
    );

    const data = await response.json();
    console.log(data);

    let loadedUsers = [];
    for (const key in data) {
      loadedUsers.push({
        id: key,
        fname: data[key].fname,
        lname: data[key].lname,
        userName: data[key].userName,
        email: data[key].email,
        accNum: data[key].accNum,
        transactions: data[key].transactions,
        password: data[key].password,
        accountBalance: data[key].accountBalance,
        savingBalance: data[key].savingBalance,
        owe: data[key].owe,
      });
    }

    setUsers(loadedUsers);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const logoutHandler = () => {
    localStorage.setItem("emailInput", JSON.stringify(""));
    localStorage.setItem("passwordInput", JSON.stringify(""));
    setEmailInput("");
    setPasswordInput("");
    setLoggedIn(null);
  };

  const demoFill = (e) => {
    e.preventDefault();
    setEmailInput("demo@gmail.com");
    setPasswordInput("mili3man");
  };

  const signupFistNameChangeHandler = (e) =>
    setSignupFistNameInput(e.target.value);

  const signupLastNameChangeHandler = (e) =>
    setSignupLastNameInput(e.target.value);

  const signupUserNameChangeHandler = (e) =>
    setSignupUserNameInput(e.target.value);

  const signupEmailChangeHandler = (e) => setSignupEmailInput(e.target.value);

  const signupPasswordChangeHandler = (e) =>
    setSignupPasswordInput(e.target.value);

  const signupConfirmPasswordChangeHandler = (e) =>
    setSignupConfirmPasswordInput(e.target.value);

  const emailChangeHandler = (e) => setEmailInput(e.target.value);
  const passwordChangeHandler = (e) => setPasswordInput(e.target.value);
  const amountChangeHandler = (e) => setAmountInput(e.target.value);
  const accNumInputChangeHandler = (e) => setAccNumInput(e.target.value);

  const currentUser = users.find((user) => user.email === emailInput);

  const currentName = currentUser?.fname;

  const currentLname = currentUser?.lname;

  const currentEmail = currentUser?.email;

  const currentPass = currentUser?.password;

  const currentAccountBalance = currentUser?.accountBalance;

  const currentAccountNumber = currentUser?.accNum;

  const currentSavingBalance = currentUser?.savingBalance;

  const currentUserName = currentUser?.userName;

  const currentOwe = currentUser?.owe;

  const currentUserTran = currentUser?.transactions;

  //this handles the login functionalities
  const loginHandler = async (e) => {
    e.preventDefault();

    if (emailInput === currentEmail && passwordInput === currentPass) {
      const token = await authenticate(
        "signInWithPassword",
        emailInput,
        passwordInput
      );

      setLoggedIn(token);
      setLoginLoader(true);
      setTimeout(() => {
        navigate("/home");
        setLoginLoader(false);
      }, 4000);
    } else {
      setLoginError(true);
      console.log(users);
    }
  };

  // automatically login the user if the credential is correct
  useEffect(() => {
    const auto = async () => {
      if (emailInput === currentEmail && passwordInput === currentPass) {
        const token = await authenticate(
          "signInWithPassword",
          emailInput,
          passwordInput
        );
        setLoginLoader(true);

        setTimeout(() => {
          /* eslint-disable */
          navigate("/home");
          /* eslint-disable */
          setLoginLoader(false);
        }, 1000);

        setLoggedIn(token);
      }
    };
    auto();
  }, [emailInput, currentEmail, passwordInput, currentPass]);

  //finds the user who owns the account number
  const currentuserAccNmber = users.find((user) => user.accNum === accNumInput);

  useEffect(() => {
    if (accNumInput.length === 10 && currentuserAccNmber !== undefined) {
      setBeneficiary(
        currentuserAccNmber.fname + " " + currentuserAccNmber.lname
      );
    } else if (accNumInput.length > 10) {
      setBeneficiary("Account Number Invalid");
    } else if (accNumInput.length > 0) {
      setBeneficiary("Searching...");
    } else {
      setBeneficiary("Beneficiary");
    }
  }, [accNumInput]);

  //Transfers money to another user
  const incraseBal = async () => {
    if (currentUser.accountBalance >= +amountInput && +amountInput > 0) {
      setLoginLoader(true);
      currentuserAccNmber.accountBalance += +amountInput;

      currentUser.accountBalance -= +amountInput;

      const savePercent = (10 / 100) * +amountInput;
      if (currentUser.accountBalance >= savePercent) {
        currentUser.accountBalance -= savePercent;
        currentUser.savingBalance += savePercent;

        currentUser.transactions.unshift({
          sender: "Savings",
          time: new Date().toLocaleTimeString(),
          date: new Date().toDateString(),
          amount: `-${new Intl.NumberFormat().format(savePercent)}`,
          status: "red",
          id: Math.floor(1000000 + Math.random() * 9000000),
        });
      }

      currentuserAccNmber.transactions.unshift({
        sender: currentName + " " + currentLname,
        time: new Date().toLocaleTimeString(),
        date: new Date().toDateString(),
        amount: `+${new Intl.NumberFormat().format(+amountInput)}`,
        status: "green",
        id: Math.floor(1000000 + Math.random() * 9000000),
      });

      currentUser.transactions.unshift({
        sender: currentuserAccNmber.fname + " " + currentuserAccNmber.lname,
        time: new Date().toLocaleTimeString(),
        date: new Date().toDateString(),
        amount: `${new Intl.NumberFormat().format(+amountInput)}`,
        status: "red",
        id: Math.floor(1000000 + Math.random() * 9000000),
      });

      const response = await fetch(
        "https://skybank-56868-default-rtdb.firebaseio.com/users.json",
        {
          method: "PUT",
          body: JSON.stringify(users),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      console.log(users);
      setTransferSuccess(true);

      setTimeout(() => {
        setAccNumInput("");
        setAmountInput("");
        setLoginLoader(false);
      }, 2000);
    } else {
      setTransferError(true);
    }
  };

  //Closes any active popup
  const closeModal = () => {
    setTransferSuccess(false);
    setTransferError(false);
    setLoginError(false);
    setTransDetails(false);
  };

  const transHandler = () => {
    setTransDetails(true);
  };

  const newUser = {
    fname: signupFistNameInput,
    lname: signupLastNameInput,
    userName: signupUserNameInput,
    email: signupEmailInput,
    accNum: "200" + Math.floor(1000000 + Math.random() * 9000000),
    transactions: [
      {
        sender: "Ugochukwu miracle",
        time: "6:45:45 AM",
        date: "Thu Oct 06 2022",
        amount: "+50",
        status: "green",
        id: 3930080,
      },
      {
        sender: "Ugochukwu miracle",
        time: "9:47:45 AM",
        date: "Thu Oct 06 2022",
        amount: "+50",
        status: "green",
        id: 3930080,
      },
    ],
    password: signupPasswordInput,
    accountBalance: 100,
    savingBalance: 0,
    owe: 0,
  };

  const existEmail = users.find((user) => signupEmailInput === user.email);
  const existUserName = users.find(
    (user) => signupUserNameInput === user.userName
  );

  const signUpHandler = async () => {
    if (existEmail === undefined && existUserName === undefined) {
      const response = await fetch(
        "https://skybank-56868-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);

      localStorage.setItem("emailInput", JSON.stringify(signupEmailInput));
      localStorage.setItem(
        "passwordInput",
        JSON.stringify(signupPasswordInput)
      );

      setEmailInput(signupEmailInput);
      setPasswordInput(signupPasswordInput);

      const token = await authenticate(
        "signUp",
        signupEmailInput,
        signupPasswordInput
      );
      setLoggedIn(token);

      location.reload();
      setLoginLoader(true);
      setTimeout(() => {
        navigate("/home");
        setLoginLoader(false);
      }, 4000);

      setSignupFistNameInput("");
      setSignupLastNameInput("");
      setSignupUserNameInput("");
      setSignupEmailInput("");
      setSignupPasswordInput("");
      setSignupConfirmPasswordInput("");
      console.log(users);
    } else {
      alert("Account or userName already exist");
    }
  };

  //holds all the value in this context
  const contextValue = {
    isLoggedIn: loginHandler,
    isLoggedOut: logoutHandler,
    loggedIn: !!loggedIn,
    emailInput,
    passwordInput,
    demoFill,
    emailChange: emailChangeHandler,
    passwordChange: passwordChangeHandler,
    currentName,
    currentAccountBalance,
    currentLname,
    currentUserName,
    currentAccountNumber,
    currentSavingBalance,
    currentOwe,
    incraseBal,
    amountInput,
    amountChange: amountChangeHandler,
    accNumInput,
    accNumInputChange: accNumInputChangeHandler,
    transferSuccess,
    closeModal,
    transferError,
    loginError,
    signupFistNameInput,
    signupLastNameInput,
    signupUserNameInput,
    signupEmailInput,
    signupPasswordInput,
    signupConfirmPasswordInput,
    signupFistNameChange: signupFistNameChangeHandler,
    signupLastNameChange: signupLastNameChangeHandler,
    signupUserNameChange: signupUserNameChangeHandler,
    signupEmailChange: signupEmailChangeHandler,
    signupPasswordChange: signupPasswordChangeHandler,
    signupConfirmPasswordChange: signupConfirmPasswordChangeHandler,
    signUpHandler,
    loginLoader,
    transDetails,
    transHandler,
    currentUserTran,
    beneficiary,
    darkMode,
    darkModeHandler,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
