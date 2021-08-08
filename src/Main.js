import React from 'react'
import { Card } from 'react-bootstrap';
import  
// import Axios from 'axios'
class Main extends React.Component {


  render() {

    return (
      <>
      <h2>This is My City</h2>
      <h3>
       {this.props.lat} {this.props.lon}
       <Card>
         <Card.Body>you rock</Card.Body>
      </Card>
      </h3>
      </>
    )
  }
}
export default Main;





