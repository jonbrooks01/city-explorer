import React from "react";
import { Card } from "react-bootstrap";

class WeatherDay extends React.Component {
  render() {
    return(
      <div>
      {this.props.weatherData.map(day => 
        <Card
        bg={'info'}
        text={'dark'}
        style={{ width: '30rem' }}
        className="mb-2">
        <Card.Header>{day.date}</Card.Header>
        <Card.Title>{day.description}</Card.Title>
        <Card.Text>High Temp:{day.highTemp}, 
        Low Temp:{day.lowTemp}</Card.Text>

        </Card>
        )}
      </div>
    )
  }
}

export default WeatherDay;