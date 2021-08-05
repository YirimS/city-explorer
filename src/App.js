import React from 'react'
import './App.css';
import Main from './Main'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Image from 'react-bootstrap/Image'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      showCity: false,
      showCityName: false,
      showCityImg: false,
      lat: 47.60621,
      lon: -122.33207,
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
    let weatherData = await axios.get(`http//localhost:3000/weather?city=${this.state.city}`)
    this.setState({
      weather: weatherData.data
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let request = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`)
      console.log(request);
      // plug in your image here

      // callback/render funtion goes here maybe?
      this.setState({
        showCityName: true,
        showCityImage: true,
        renderlatlon: true,
        renderError: false,
        displayWeather: true,
        city: submitResults.data[0].display_name,
        lat: submitResults.data[0].lat,
        lon: submitResults[0].lon,
        imgSrc: imageSrc
      })
    } catch (error) {
      console.log('my error', error.response);

      this.setState({
        renderError: true,
        showCityName: false,
        renderLatLon: false,
        showCityImage: false,
        errorMessage: `Error: ${error.response.status}, ${error.response.data.error}`,
      })
    }

render() {
      let displayUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=15`
      console.log(displayUrl);
      
      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>City Explorer</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" as="input" />

            <Button type="submit">Explore</Button>
          </Form>
          <Image src={displayUrl} />
          {/* <Main /> */}
        </>
      )
    }
  }

  export default App;
