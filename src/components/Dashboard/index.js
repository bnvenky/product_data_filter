import {Link} from 'react-router-dom'
import './index.css';


const Dashboard = () => {

  return (
    <>
    <div className="dashboard">
      <h1>Product Filter</h1>
     <ul className="nav-menu">
      <Link className="nav-link" to="/">
      <li>Products</li>
      </Link>
      <Link className="nav-link" to="/cart">
      <li>Cart</li>
      </Link>
      <Link className="nav-link" to="/about">
      <li>About</li>
      </Link>
      </ul>
    </div>
      </>
  );
}


export default Dashboard;