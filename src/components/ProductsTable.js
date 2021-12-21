import React , { Component } from 'react'
import { Button } from 'react-bootstrap'
import AddProducts from './AddProducts'
import {BrowserRouter as Router, Routes, Route, useHistory, Link} from 'react-router-dom';


class ProductsTable extends Component {
    render() {
      return(
          <Router>
               <Link to="/addProducts"><Button>Add Inventory</Button></Link>
               
               <div className="container">
           
                {/* <h3 className="text center">This is the table</h3> */}
                    </div>

             <Routes>
                 {/* <Route exact path="/" element={<ProductsTable />} ></Route> */}
                 <Route path='/addProducts' element={< AddProducts />}></Route>
                 
             </Routes>
          </Router>

      );
    }
}


// function ProductsTable () {
//     return(
//         // <Router>
         
//         //     <Routes>
            
            
           
//         //     <Route exact path="/" component={ProductsTable} />
//         //     <Route path="/addProducts" component={AddProducts} />


//         //     </Routes>
           
//         // </Router>

//         <Router>
//             <Link to="/addProducts"><Button>Add Products</Button></Link>

//             <Routes>
//                 <Route exact path="/" element={< ProductsTable />} />
//                 <Route path="/addProducts" element={<AddProducts />} />
//             </Routes>

//              <div className="container">
            
//             <h3 className="text center">This is the table</h3>
//             </div>

//         </Router>

           

       
//     )
// }

export default ProductsTable