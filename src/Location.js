import React from "react";

class Location extends React.Component{
  render(){
    return(
      
      <div className="cityData">    
      <p>{this.props.cityName}</p>      
      <p>{this.props.cityLat}</p>
      <p>{this.props.cityLon}</p>
      </div>
    )
  }
}




export default Location;