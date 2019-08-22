import React, { Component, Fragment } from 'react';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <h2>Hi {this.state.id} </h2>
                <span>Get to know me now</span>
            </Fragment>
        );
    }
    componentDidMount() {
        let params = this.props.match.params;
        this.setState({
            id: params.id
        })
    }
}

export default About;