import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './sass/App.scss';
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";


// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// AOS.init({
//   once: true,
// });


const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
