import { React, useState, createRef, useEffect } from 'react';
import { Button, Form, Table, Row, Col } from 'react-bootstrap';

//Add Products form

function AddProducts() {


  //typeOfData [stateData, stateUpdateFunction] = useState{initalState}

  let initialValue = [];
  const [products, setProducts] = useState(() => {
    const allProducts = localStorage.getItem('products');
    return allProducts ? JSON.parse(allProducts) : initialValue;
  });

  const incIndex = createRef();
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  //addProductHandler method
  const add = (e) => {
    e.preventDefault();

    // alert(e.target.product_name.value)

    // const formData = e.target;
    // const product_name = formData.product_name.value;
    // const product_name =  formData.product_name.value;
    // const product_price = formData.product_price.value;
    // const quantity = formData.quantity.value;

    // setProducts([product_name, product_price, quantity]);
    // console.log(products);

   
    const formData = e.target;
    const newProduct = {
      lot: formData.lot.value,
      gross_weight: formData.gross_weight.value,
      weight_in_water: formData.weight_in_water.value,
      density: formData.density.value,
      purity: formData.purity.value,
      net_weight: formData.net_weight.value,
      name_of_supplier_carat: formData.name_of_supplier_carat.value,
      biometric: formData.biometric.value,
      total_pounds: formData.total_pounds.value,
      ounce: formData.ounce.value,
      barcode_number: formData.barcode_number.value,
      lme_price: formData.lme_price.value,
      total_payment: formData.total_payment.value,
      recieved_by: formData.recieved_by.value,
      date_recieved: formData.date_recieved.value,
      representatives_name: formData.representatives_name.value,
    };

    // Adding products inside products array;
    setProducts([...products, newProduct]);

    formData.lot.value = '';
    formData.gross_weight.value = '';
    formData.weight_in_water.value = '';
    formData.density.value = '';
    formData.purity.value = '';
    formData.net_weight.value = '';
    formData.name_of_supplier_carat.value = '';
    formData.biometric.value = '';
    formData.total_pounds.value = '';
    formData.ounce.value = '';
    formData.barcode_number.value = '';
    formData.lme_price.value = '';
    formData.total_payment.value = '';
    formData.recieved_by.value = '';
    formData.date_recieved.value = '';
    formData.representatives_name.value = '';

    // console.log(products);
  };

  // //increment Quantity value
  // const incrQty = (e) => {
  //   //  const indexOfArray = e.target.value;
  //    products[e.target.value].quantity += 1;
  //    setProducts([...products]);

  // }

  //  //decrement Quantity value
  //  const decrQty = (e) => {
  //   products[e.target.value].quantity -= 1;
  //   setProducts([...products]);

  // }

  return (
    <div className="text-center mt-5">
      {/* <h1>Precious Metals Inventory System</h1> */}

      <Form onSubmit={add} method="post" className="container mt-5">
        <h1>Precious Metals Inventory System</h1>
        <Row className="mb-0">
          <Form.Group as={Col} controlId="formGridLot">
            <Form.Label></Form.Label>
            <Form.Control type="number" placeholder="Lot" name="lot" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGrossWeight">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Gross Weight"
              name="gross_weight"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-0">
          <Form.Group as={Col} controlId="formGridWeightInWater">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Weight in water"
              name="weight_in_water"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDensity">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Density"
              name="density"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-0">
          <Form.Group as={Col} controlId="formGridPurity">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Purity"
              name="purity"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNetWeight">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Net Weight"
              name="net_weight"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-0">
          <Form.Group as={Col} controlId="formGridNameOfSupplierCarat">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Name Of Supplier Carat"
              name="name_of_supplier_carat"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBiometric">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Biometric"
              name="biometric"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-0">
          <Form.Group as={Col} controlId="formGridTotalPounds">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Total Pounds"
              name="total_pounds"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridOunce">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Ounce"
              name="ounce"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-0">
          <Form.Group as={Col} controlId="formGridBarcodeNumber">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Barcode Number"
              name="barcode_number"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLMEPrice">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="LME Price"
              name="lme_price"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-0">
          <Form.Group as={Col} controlId="formGridTotalPayment">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Total Payment"
              name="total_payment"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRecievedBy">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Recieved By"
              name="recieved_by"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridRepresentativesName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Representative's Name"
              name="representatives_name"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label></Form.Label>
            <Form.Control
              type="date"
              placeholder="Date Recieved"
              name="date_recieved"
              required
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Add to Inventory
        </Button>
      </Form>

      <br></br>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Lot</th>
              <th>Gross Weight</th>
              <th>Weight in water</th>
              <th>Density</th>
              <th>Purity</th>
              <th>Net Weight</th>
              <th>Name Of Supplier Carat</th>
              <th>Biometric</th>
              <th>Total Pounds</th>
              <th>Ounce</th>
              <th>Barcode Number</th>
              <th>LME Price</th>
              <th>Total Payment</th>
              <th>Recieved By</th>
              <th>Representative Name</th>
              <th>Date of Payment</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.lot}</td>
                  <td>{item.gross_weight}</td>
                  <td>{item.weight_in_water}</td>
                  <td>{item.density}</td>
                  <td>{item.purity}</td>
                  <td>{item.net_weight}</td>
                  <td>{item.name_of_supplier_carat}</td>
                  <td>{item.biometric}</td>
                  <td>{item.total_pounds}</td>
                  <td>{item.ounce}</td>
                  <td>{item.barcode_number}</td>
                  <td>$ {item.lme_price}</td>
                  <td>$ {item.total_payment}</td>
                  <td>{item.recieved_by}</td>
                  <td>{item.representatives_name}</td>
                  <td>{item.date_recieved}</td>
                  <td>
                    <Button>View</Button>
                  </td>
                  <td>
                    <Button variant="success">Edit</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AddProducts;
