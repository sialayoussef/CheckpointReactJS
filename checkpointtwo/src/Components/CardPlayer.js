import Card from 'react-bootstrap/Card';

const CardPlayer=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>
            {el.team}
            </Card.Text>        
        </Card.Body>
        </Card>
    )
}

CardPlayer.defaultProps = {
    el : {
        "name" : "Youssef Siala",
        "team" : "Esperance",
        "nationality" : "Tunisienne",
        "jerseyNumber" : 11,
        "age" : 23,
        "image" : "https://gomycodelearn.blob.core.windows.net/profiles/0187346b-f4de-4194-9c02-227b84a30d71-133577378151276202.jpg"
    }
}
export default CardPlayer