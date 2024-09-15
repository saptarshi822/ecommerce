import { React,useState,useEffect} from 'react'
import fetchProducts from '../services/fetchProducts';

 function List(props) {
    //create a new array by filtering the original array
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
          const response = await fetchProducts();
          setData(response.products)
        }
        fetchData();
      }, []);
    console.log(data[0]);
    console.log(typeof(data));
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.title.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default List