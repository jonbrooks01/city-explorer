import React from "react";
import { Button, Container, Form,} from "react-bootstrap";
import Location from "./Location";
import Error from "./Error";
import axios from "axios";
import WeatherDay from "./WeatherDay";
import Map from "./Map";
import './Main.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
      city:'',
      cityName: '',
      cityLat: '',
      cityLon: '',
      displayError: false,
      weatherData: []
    }
  }

  handleInput = (e) => {
    this.setState({city: e.target.value}
      , () => console.log(this.state.city)
      );
  }


  handleExplorer = async (e) => {
    e.preventDefault();
    try{
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`
    let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`
    console.log(url);
    const response = await axios.get(url)
    const weatherResponse = await axios.get(weatherUrl)
    console.log(response.data[0]);
    this.setState({ 
      displayInfo: true,
      cityName: response.data[0].display_name,
      cityLat: response.data[0].lat,
      cityLon: response.data[0].lon,
      weatherData: weatherResponse.data
    },
    () => console.log(this.state.weatherData)
    )
  }
  catch{ this.setState({
    displayError:true
  })
  }
  }

  resetError = () => {
    this.setState({
      displayInfo: false,
      displayError: false
    }) 
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleExplorer} className="city">
            <Form.Group>
              <Form.Label>Enter a city location for more information</Form.Label>
              <Form.Control type="text" onChange={this.handleInput} />
            </Form.Group>
            <Button type="submit" onClick={this.resetError}>Explore!</Button>
        </Form>

        {this.state.displayInfo &&
          <Container>
            

            <Map 
            cityLat={this.state.cityLat}
            cityLon={this.state.cityLon}
            />

            <Location 
            cityName={this.state.cityName}
            cityLat={this.state.cityLat}
            cityLon={this.state.cityLon}
            />

            <WeatherDay 

            weatherData = {this.state.weatherData}
            />
            </Container>

  }
  {this.state.displayError &&
     <>
        <Error 

        />
     </>
  }
      
      </>
    )
  }
}

export default Main;