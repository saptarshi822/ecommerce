import Navbar from "../components/Navbar";
import CartFilter from "../components/CartFilter";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
export default function CartPage() {
    const filter = useSelector((state)=>state.search.cartList)
    console.log("cartPage:",filter)
    return (
        <div>
            <Navbar />
            <CartFilter props={filter} />
            <Footer />
        </div>
    );
}