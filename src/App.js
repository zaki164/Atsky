import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './sass/App.scss';
import Layout from "./Layout/Layout";
import { HashRouter as Router } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init({
  once: true,
});

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
