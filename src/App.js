// import { AppContextProvider } from "./Components/Context/Context";
// import React, { Fragment, useState, useCallback, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import Header from "./Pages/Header/Header";
// import Router from "./Router";
// import Logout from "./Pages/Logout/Logout";

// function App() {
//   const [initilized, setInitilized] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setauthenticated] = useState(
//     localStorage.getItem("authenticated") || false
//   );

//   /**
//    * Check user is Logged in or not
//    */
//   const checkLogin = useCallback(() => {
//     /*check user is logged in or not. for now just mock it
//        later we will direct user to login if not loggedin . if logged in will direct to dashboard
//         route. or using react router browser history
//       */
//     setLoading(false);
//     let current_unix_time = Math.round(new Date().getTime() / 1000);
//     localStorage.setItem("login_time", current_unix_time);
//     //setauthenticated(true);
//     localStorage.setItem("authenticated", true);
//     setauthenticated(localStorage.getItem("authenticated"));
//     setInitilized(true);
//   }, [setLoading, setauthenticated, setInitilized]);
//   const Login = async () => {
//     checkLogin();
//   };
//   useEffect(() => {
//     if (localStorage.getItem("login_time")) {
//       setauthenticated(true);
//     }
//   }, [initilized]);
//   // generate our app context
//   const appContext = {
//     loading,
//     authenticated,
//     setauthenticated,
//     Login,
//     initilized,
//     //methods
//   };
//   return (
//     <AppContextProvider value={appContext}>
//       <Fragment>
//         <BrowserRouter>
//           <Header />
//           <Logout />
//           <Router />
//         </BrowserRouter>
//       </Fragment>
//     </AppContextProvider>
//   );
// }
// export default App;

import TransitionAlerts from "./Components/Alert/alert";
import React from "react";
export default function App() {
  return <TransitionAlerts message="Success"></TransitionAlerts>;
}
