import { useEffect, useState } from "react";
import {Card, Col, Row, Container} from 'react-bootstrap';

const Dogs = () => {
    const apiUrl = 'https://api.thedogapi.com/v1/breeds?limit=172&page=0';
    const apiKey = 'live_YofICKhS5rzVW9ntbmlFH90L7hHJr6uYB8QG3jUKinPyZoGquMS9LsBPbM2QKoKM';

    const [dogs, setCats] = useState({});

    const requestCats = async () => {
        const headers = {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        };
        const apiResponse = await fetch(apiUrl, { headers });
        const jsonResult = await apiResponse.json();
        console.log("cats result", jsonResult);
        setCats(jsonResult);
    }

    useEffect(() => {
        requestCats();
      }, []);    

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    {Object.values(dogs).map(dog => (
                        <Col style={{height: 300}} key={dog.id}>
                            <Card style={{width: 160}} >
                                <Card.Body>
                                    <Card.Title>{dog.name}</Card.Title>
                                    {/* <p>{dog.description}</p> */}
                                    <Card.Img src={dog.image.url} />
                                </Card.Body> 
                            </Card>
                        </Col>
                    ))}
                </ Row>
            </Container>      
        </>
    )
};

export default Dogs;