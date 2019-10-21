import React, { Suspense } from 'react';
// import logo from s'../../logo.svg';
// import './App.css';

import { Switch, Route } from 'react-router-dom'

import Layout from '../Layout/Layout';
import Loader from '../../components/Loader/Loader';
const TransactionsPage = React.lazy(() => import('../TransactionsPage/TransactionsPage'));
const AccountsPage = React.lazy(() => import('../AccountsPage/AccountsPage'));
const ProfilePage = React.lazy(() => import('../ProfilePage/ProfilePage'));


const App: React.FC = () => {
  return (
    
    <Layout>
      <Suspense fallback={<Loader/>}>

        <Switch>
          <Route path="/" exact>
            <TransactionsPage/>
          </Route>
          <Route path="/accounts">
            <AccountsPage />
          </Route>
          <Route path="/profile" >
            <ProfilePage/>
          </Route>
        </Switch>
        
      </Suspense>
    </Layout>
  );
}

export default App;
