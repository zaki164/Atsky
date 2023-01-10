import "bootstrap/dist/css/bootstrap.min.css";
import './sass/App.scss';
import { HashRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
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
