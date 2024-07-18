import product from "../product"
import Card from 'react-bootstrap/Card';

const Pic=()=>{
    return(
        <Card.Img variant="top" src={product.image} alt="Not Found" />       
    )
}

export default Pic