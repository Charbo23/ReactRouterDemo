import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { errorNotify } from '../utils/Notify';
import { Link } from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    render() {
        return (
            <Fragment>
                <h1>我是首页</h1>
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
        this._isMounted=true;
        axios.get('https://www.easy-mock.com/mock/5d5dfa81db64d40498f8fec2/ReduxRouterDemo/list')
            .then(response => {
                if(this._isMounted){
                    this.setState({ list: response.data.data.list })
                }else{
                    console.log('setState Canceled ');
                }
            })
            .catch(error => {
                errorNotify('获取数据失败', error.message);
            });
    }
    componentWillUnmount(){
        this._isMounted=false;
    }
}

export default Index;