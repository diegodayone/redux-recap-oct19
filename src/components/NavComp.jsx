import React from "react"
import {connect } from "react-redux"

import { Input, Button, Col, Row, Container, Spinner, Alert } from "reactstrap"

const mapStateToProps = state => state

class NavComp extends React.Component {
    render () {
        return (    
        <Container>
            <h1>The search result provided {this.props.library.searchResult.length} results</h1>
            {this.props.utils.isLoading && <Spinner color="primary"></Spinner>}
            {this.props.utils.errorMessage.length > 0 && <Alert color="primary">
                    {this.props.utils.errorMessage}
                </Alert>}

        </Container>)
    }
}

export default connect(mapStateToProps)(NavComp);