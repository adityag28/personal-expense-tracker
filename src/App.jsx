import { createRoot } from 'react-dom/client';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import Home from './pages/Home';
import { StrictMode } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import Body from './pages/Body';
import MyExpense from './pages/MyExpense';
import Insights from './pages/Insights';
import Setup from './pages/Setup';
import AccountSettings from './pages/AccountSettings';
import Notification from './pages/Notification';
import appStore, { persistor } from './store/appStore';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/overview' element={<Body />}>
              <Route index element={<Dashboard />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='expense' element={<MyExpense />} />
              <Route path='insights' element={<Insights />} />
              <Route path='notification' element={<Notification />} />
              <Route path='setup' element={<Setup />} />
              <Route path='settings' element={<AccountSettings />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
);
