import SimpleSlider from "../components/SimpleSlider.jsx";
import Products from "../components/Products.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import List from "../components/List.jsx";  
import "./Homepage.css";
;

export default function HomePage() {
  return (
    <>
      <Navbar className="" />
      <div className="content ">
        <SimpleSlider />
        <List />
      </div>
      <Footer />
    </>
  );
}
