import product from "../product"
import Button from 'react-bootstrap/Button';
const Price=()=>{
    return(
        <Button variant="outline-success">Order : {product.price} DT</Button>      
    )
}

export default Price