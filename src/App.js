import React from 'react'
import './App.css';
import Main from './Main'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      long: 0,
      showCity: true,
      city: '',



    }
  }

  handleChange = (event) => {
    this.setState({
      city: event.target.value
    });
  }

handleSubmit = async (e) => {
  e.preventDefault()
  let request = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`)
  console.log (request);
}

    render() {

      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>City Explorer</Form.Label>
            <Form.Control onChange={this.handleChange} type="text" as="input" />

            <Button type="submit">Explore</Button>
          </Form>

          {/* <Main /> */}
        </>
      )
    }
  }
 
  export default App;
