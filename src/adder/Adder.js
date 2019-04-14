import React, { Component } from 'react';
import uuid from 'uuid';
import { Form, Icon, Input, Button, Rate, Card, Row, Col } from 'antd';

class Adder extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addPlace({
          id: uuid.v4(),
          location: this.props.location,
          ...values
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
        <Form onSubmit={this.handleSubmit} onReset={this.props.reset}>
          <Form.Item style={{ marginBottom: 0 }}>
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: 'Please input restaurant name!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="pushpin" style={{ color: `rgba(0,0,0,.25)` }} />
                }
                placeholder="Restaurant Name"
              />
            )}
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            {getFieldDecorator('favoriteFood', {
              rules: [
                { required: true, message: 'Please input your favorite food!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="heart" style={{ color: `rgba(0,0,0,.25)` }} />
                }
                placeholder="Favorite Food"
              />
            )}
          </Form.Item>
          <Form.Item style={{ textAlign: `center`, marginBottom: 0 }}>
            {getFieldDecorator('rating', {
              initialValue: 3
            })(<Rate />)}
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Row type="flex" justify="space-between">
              <Col span={10}>
                <Button htmlType="reset" block>
                  Cancel
                </Button>
              </Col>
              <Col span={10}>
                <Button type="primary" htmlType="submit" block>
                  Add
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(Adder);
