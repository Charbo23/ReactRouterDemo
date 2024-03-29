import React from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Input, Button, List, Row, Col } from 'antd';
import IconText from '@/utils/IconText';
import antdStyle from '@/style/antd-style.module.scss';
const { Option } = Select;
const TodoListUI = (props) => {
    const { loading, inputValue, changeInput, list, addItem, deleteItem } = props;
    const renderItem=(item) => (
        <List.Item
            actions={[
                <IconText
                    type="delete"
                    text="删除"
                    key="list-delete"
                    onDeleteClick={deleteItem}
                    itemId={item.id}
                />

            ]}
        >
            <List.Item.Meta
                title={`待办事项-${item.id}`}
                description={item.value}
            />
        </List.Item>
    );
    return (
        <Row>

            <Col xl={12} lg={24}>
                <h1 style={{ textAlign: "center" }}>TodoList</h1>
                <div className='input-group'>
                    <Input
                        placeholder='Write Something'
                        className={`test ${antdStyle['ant-input']}`}
                        value={inputValue}
                        onChange={changeInput}
                        onPressEnter={addItem}
                        allowClear
                    />
                    <Button
                        type='primary'
                        onClick={addItem}
                        className={antdStyle['ant-btn']}
                    >增加</Button>
                </div>
                <div className='list'>
                    <List
                        bordered
                        loading={loading}
                        dataSource={list}
                        renderItem={renderItem}
                    />
                </div>
            </Col>
            <Col xl={12} lg={24}>
                <Form style={{ marginTop: 32 }} >
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
            </Col>

        </Row>
    );
};


export default TodoListUI;