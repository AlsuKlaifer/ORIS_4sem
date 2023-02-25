import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;