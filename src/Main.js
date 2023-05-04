import React from "react";
import { Button, Form} from "react-bootstrap";
// import { Card } from "react-bootstrap";
import axios from "axios";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
      city:'',
      cityName: '',
      cityLat: '',
      cityLon: ''
    }
  }

  handleInput = (e) => {
    this.setState({city: e.target.value}
      , () => console.log(this.state.city)
      );
  }


  handleExplorer = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`
    console.log(url);
    const response = await axios.get(url)
    console.log(response.data[0]);
    this.setState({ 
      displayInfo: true,
      cityName: response.data[0].display_name,
      cityLat: response.data[0].lat,
      cityLon: response.data[0].lon
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleExplorer}>
            <Form.Group>
              <Form.Label>Enter a city location for more information</Form.Label>
              <Form.Control type="text" onChange={this.handleInput} />
            </Form.Group>
            <Button type="submit">Explore!</Button>
        </Form>
        {this.state.displayInfo &&
                    <>
                        <p>{this.state.cityName}</p>
                        <p>{this.state.cityLat}</p>
                        <p>{this.state.cityLon}</p>
                    </>
  }
      </>
    )
  }
}

export default Main;