import React from 'react'
import './App.css';
import Main from './Main'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    })


    render() {

      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>City Explorer</Form.Label>
            <Form.Control onChange={this.getCity} type="text" as="input" />

            <Button type="submit">Explore</Button>
          </Form>

          {/* <Main /> */}
        </>
      )
    }
  }
} 
  export default App;
