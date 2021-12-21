import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function LoginForms({ Login, error }) {
  const [details, setdetails] = useState({ name: '', email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <Form
      onSubmit={submitHandler}
      className="d-flex text-center align-items-center justify-contents-center"
    >
      <div className="form-inner">
        <h2>Precious Metals Inventory System</h2>
        <h3 className="text-center">Login</h3>
        {error != '' ? <div className="error">{error}</div> : ''}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          {/* <Form.Control type="email"  id="email" required/> */}
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Username or Email"
            onChange={(e) => setdetails({ ...details, email: e.target.value })}
            value={details.email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>

          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setdetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Show Password" />
  </Form.Group> */}

        <Button type="submit" value="Login" id="submit">
          Login
        </Button>
      </div>
    </Form>
  );
}

export default LoginForms;

// import React from 'react'
// import {Button, Form} from 'react-bootstrap'

// function AddProducts() {
//     return (
//         <div className="text-center">

//    <Form>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Username or Email</Form.Label>
//     <Form.Control type="email" placeholder="Username or Email" required/>

//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" required/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Show Password" />
//   </Form.Group>
//   <Button variant="primary"  type="submit" className="btn btn-block">
//     Login
//   </Button>
// </Form>
//         </div>
//     )
// }

// export default AddProducts
