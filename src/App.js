import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button, Col, Row, Container } from "reactstrap"
import LibraryComponent from './components/LibraryComponent';
import { connect } from "react-redux"
import NavComp from './components/NavComp';
import { loadWithThunk } from "./actions"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  loadBooks: searchString => dispatch(loadWithThunk(searchString))
})



class App extends React.Component {
  state = {
    search: "",
    movies: []
  }

  // startSearch = async () => {
     
  //     console.log(json);
  //     this.setState({
  //       movies: json.Search
  //     })
  // }

  render() {
    return (
    <Container>
      <NavComp></NavComp>
      <Row>
        <Col><Input type="text" placeholder="Search..." value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} /></Col>
        <Col><Button  onClick={() => this.props.loadBooks(this.state.search)} >Go!</Button> </Col>
      </Row>
      <LibraryComponent />
    </Container>
  );
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
