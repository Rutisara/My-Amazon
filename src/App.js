
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51LbcLVIfko2Bv7cqIpGiH3IQlnkgNP0N0pAjhPGKeQm2RVfaLT0XDFJrXtQOHIHw7r4rhK5vIxlfUTxDx1YTBJWL00iLALY0iK"
);

function App() {

  const [{user}, dispatch] = useStateValue();

  // console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        }); 
      }
    });
  },[]);



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/c"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






// {/* <Routes> 
//   <Route path="/login" element={<Login />} />
//   <Route path="/"
//     element={<><Header /><Home /></>} />
//   <Route path="/c" element={<><Header/><c/></> } />
// </Routes> */}




// {/* <Switch>
//   <Route path="/c">
//     <Header />
//     <Checkout />
//   </Route>

//   <Route path="/">
//     <Header />
//     <Home />
//   </Route>
// </Switch>; */}