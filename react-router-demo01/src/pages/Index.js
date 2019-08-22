import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {errorNotify} from '../Notify';
import {Link,Route} from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                // {
                //     "cid": "rFCFvY3kM",
                //     "title": "CBLog-1"
                // },
                // {
                //     "cid": "4ELAZY1DH",
                //     "title": "CBLog-2"
                // },
                // {
                //     "cid": "MXzC48xk0",
                //     "title": "CBLog-3"
                // }
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <h2>Welcome to Charbo's Index Page</h2>
                <ul>
                    {
                        this.state.list.map((item) => {
                            return (
                                <li key={item.cid}>
                                    <Link to={`/list/${item.cid}`}>{item.cid}——{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5d5dfa81db64d40498f8fec2/ReduxRouterDemo/list')
            .then(response => {
                this.setState({ list: response.data.data.list })
            })
            .catch(error => {
               errorNotify('获取数据失败', error.message);

            });
    }
}

export default Index;