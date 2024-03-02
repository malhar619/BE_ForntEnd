// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexSelectionPage from './components/option chain/IndexSelectionPage';
import Nifty from './components/option chain/NiftyPage';
import BankNifty from './components/option chain/BankNiftyPage';
import FinNifty from './components/option chain/FinNiftyPage';
import IntrinsicValueCalculator from './components/intrinsic/Intrinsic';
import UndervaluedStockIdentifier from './components/under valued/Under';
import StreamlitApp from './components/streamlit app/StreamlitApp';
import Header from './components/Header/Header';
import { AuthProvider } from './utils/AuthContext';
import Register from './pages/Register';
import PrivateRoutes from './utils/PrivateRoutes';
import Profile from './pages/Profile';
import Login from './pages/Login';

import Mutual from './Mutual';
import SmallCapHome from './components/mutual funds/SmallCapHome';
import SmallCapReturns from './components/mutual funds/SmallCapReturns';
import MidCapHome from './components/mutual funds/MidCapHome';
import MidCapReturns from './components/mutual funds/MidCapReturns';
import LargeCapHome from './components/mutual funds/LargeCapHome';
import LargeCapReturns from './components/mutual funds/LargeCapReturns';
import About from './pages/About';
const App = () => {
  return (
    
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
          <Route element={<PrivateRoutes/>}>


          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<IndexSelectionPage />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Mutual Funds" element={<Mutual/>} />
          <Route path="/Nifty" element={<Nifty />} />
          <Route path="/BankNifty" element={<BankNifty />} />
          <Route path="/FinNifty" element={<FinNifty />} />
          <Route path="/Intrinsic Value" element={<IntrinsicValueCalculator />} />
          <Route path="/Valuation" element={<UndervaluedStockIdentifier />} />
          <Route path="/Stocks" element={<StreamlitApp />} />

          <Route path="/small-cap/*" element={<SmallCapHome />} />
         <Route path="/small-cap/returns/:type" element={<SmallCapReturns />} />

         <Route path="/mid-cap/*" element={<MidCapHome />} />
         <Route path="/mid-cap/returns/:type" element={<MidCapReturns />} />

         <Route path="/large-cap/*" element={<LargeCapHome />} />
         <Route path="/large-cap/returns/:type" element={<LargeCapReturns />} />


          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
