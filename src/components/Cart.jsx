import { useSelector } from "react-redux";
import { List } from "./List";
export default function Cart() {
    const count = useSelector((state)=>state.search.value)

    return (
        <div>
            <h1>Cart{count}</h1>
        </div>
    );
}