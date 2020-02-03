import React from "react"
import {connect } from "react-redux"

import { Input, Button, Col, Row, Container } from "reactstrap"

const mapStateToProps = state => state

class LibraryComponent extends React.Component {
    render () {
        return (    
        <>
            {this.props.library.searchResult.map((movie, index) => <Row key={index}>
            <img src={movie.Poster} className="img-fluid"></img>
            <h4>{movie.Title}</h4>
            </Row>
            )}
        </>)
    }
}

export default connect(mapStateToProps)(LibraryComponent);