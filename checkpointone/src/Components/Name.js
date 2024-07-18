import product from "../product"
import Card from 'react-bootstrap/Card';
const Name=()=>{
    return(   
        <Card.Title>
            {product.name}
        </Card.Title>       
    )
}

export default Name