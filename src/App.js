import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForms from './components/LoginForms';
import { Button } from 'react-bootstrap';

import ProductsTable from './components/ProductsTable';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  const [user, setuser] = useState({ name: '', email: '', password: '' });
  const [error, seterror] = useState('');

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in');
      setuser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
    } else {
      console.log('Details do not match!');
      seterror('Details do not match!');
    }
  };

  const logout = () => {
    console.log('logout');
    setuser({ name: '', email: '', password: '' });
  };

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ProductsTable />} />

    //   </Routes>
    // </Router>

    <div className="App">
      {user.email != '' ? (
        <header className="App-header">
          <Button onClick={logout}>Logout</Button>
          <br></br>
          <br></br>
          {/* <AddProducts /> */}
          <ProductsTable />
        </header>
      ) : (
        <LoginForms Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
