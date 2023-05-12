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
        <Card.Text>Temp:{day.temp}
        </Card.Text>

        </Card>
        )}
      </div>
    )
  }
}

export default WeatherDay;