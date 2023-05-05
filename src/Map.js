import React from "react";

class Map extends React.Component {
  render() {
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.props.cityLat},${this.props.cityLon}&size=600x600&zoom=14&`
    return (

      <div className="mapImg" >
        <img src={url} alt="City Map" />

      </div>
    )
  }
}



export default Map;