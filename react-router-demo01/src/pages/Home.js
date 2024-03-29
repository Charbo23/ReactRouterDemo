import React, { Component } from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
const { Option } = Select;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Form style={{ marginTop: 32 }}>
                <h1 style={{textAlign:"center"}}>Home Page</h1>
                <Form.Item
                    label="数字输入框"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <InputNumber min={1} max={10} defaultValue={3} />
                    <span className="ant-form-text"> 台机器</span>
                    <a href="https://ant.design">链接文字</a>
                </Form.Item>
                <Form.Item
                    label="开关"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Switch defaultChecked />
                </Form.Item>
                <Form.Item
                    label="滑动输入条"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Slider defaultValue={70} />
                </Form.Item>
                <Form.Item
                    label="选择器"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="日期选择框"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        确定
      </Button>
                    <Button style={{ marginLeft: 8 }}>
                        取消
      </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Home;