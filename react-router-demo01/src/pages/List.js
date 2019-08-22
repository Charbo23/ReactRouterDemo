import React, { Component, Fragment } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <h2>List Page ->{this.state.id} </h2>
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

export default List;