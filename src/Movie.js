import React from "react";
import { Card } from "react-bootstrap";


class Movie extends React.Component {
  render() {
    return(

    <div>
    {this.props.movieData.map(film =>
      <Card border="success" style={{width:'18rem'}}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${film.poster}`} className="cardImg"/>
      <Card.Title>{film.name}</Card.Title>
      <Card.Title>Released:{film.release_date}</Card.Title>
      <Card.Text>{film.overview}</Card.Text>
      </Card>     
      )}
    </div>
    )
  }
}



export default Movie;