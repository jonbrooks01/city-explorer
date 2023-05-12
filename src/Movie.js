import React from "react";
import { Card } from "react-bootstrap";


class Movie extends React.Component {
  render() {
    return(

    <div>
    {this.props.movieData.map(film =>
      <Card>
      <Card.Header>{film.title}</Card.Header>
      <Card.Title>Released:{film.release_date}</Card.Title>
      <Card.Text>{film.overview}</Card.Text>
      </Card>     
      )}
    </div>
    )
  }
}



export default Movie;