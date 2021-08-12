import React from 'react'
import './App.css';
import Main from './Main'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Map from './map'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      showCity: false,
      showCityName: false,
      showCityImage: false,
      lat: "",
      lon: "",
      renderLatLon: false,
      renderError: false,
      imgSrc: "",
      errorMessage: '',
      showWeather: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  getData = async () => {
    try{let weatherData = await axios.get(`http//localhost:3001/weather?city=${this.state.city}`)
    this.setState({
      weather: weatherData.data
    })} catch(error){console.log(error, 'getting weather data')}
    
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let request = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`)
      console.log(request.data[0].lat);
      // plug in your image here

      // callback/render funtion goes here maybe?
      this.setState({
        showCityName: true,
        showCityImage: true,
        renderlatlon: true,
        renderError: false,
        displayWeather: true,
        city: request.data[0].display_name,
        lat: request.data[0].lat,
        lon: request.data[0].lon,
      })

    } catch (error) {
      console.log('my error', error.response);

      this.setState({
        renderError: true,
        showCityName: false,
        renderLatLon: false,
        showCityImage: false,
        errorMessage: `Error: ${error.response.status}, ${error.response.data.error}`,
      });
    }
  }
render() {
     
console.log(this.state)
      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>City Explorer</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" as="input" />

            <Button type="submit">Explore</Button>
          </Form>

<p>{this.state.city}</p>

{this.state.renderError ? <h1>{this.state.errorMessage}</h1> : ""}
          {this.state.showCityImage && 
          <Map lat={this.state.lat} lon={this.state.lon}/>
          }


          <Main handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          getData={this.getData}
          showCityImg={this.showCity}
          showCityName={this.showCityName}
          renderLatLon={this.renderLatLon}
          renderError={this.renderError}
          showWeather={this.state.showWeather}
          city={this.state.city}
          imgSrc={this.state.imgSrc}
          lat={this.state.lat}
          lon={this.state.lon}
          errorMessage={this.state.error}
          
          />
        </>
      )
    }
  }
  export default App;
