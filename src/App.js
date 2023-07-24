import { BrowserRouter as Router, Routes ,  Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss"
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
