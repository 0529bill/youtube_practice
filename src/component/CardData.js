import React from 'react';
import { Card, Button, CardDeck, Container } from 'react-bootstrap';

function CardData({ props }) {
  let handleCardData = () => {
    console.log(props);
    return props.map((item) => {
      return (
        <CardDeck className="m-3 col-10 col-sm-8 col-lg-6" key={item.etag}>
          <Card>
            <Card.Img
              variant="top"
              src={`${item.snippet.thumbnails.medium.url}`}
            />
            <Card.Body>
              <Card.Title>{item.snippet.title}</Card.Title>
              <Card.Text>Description: {item.snippet.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                <Button variant="primary">Go somewhere</Button>
              </a>
            </Card.Footer>
          </Card>
        </CardDeck>
      );
    });
  };

  return <div>{props.length ? handleCardData() : null}</div>;
}

export default CardData;
