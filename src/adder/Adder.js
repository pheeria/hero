import React, { Component } from 'react';
import { Form, Icon, Input, Button, Rate } from 'antd';

class Adder extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: 'Please input restaurant name!' }
            ]
          })(
            <Input
              prefix={
                <Icon type="pushpin" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="Restaurant Name"
              onChange={v => console.log(v.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('favoriteFood', {
            rules: [
              { required: true, message: 'Please input your favorite food!' }
            ]
          })(
            <Input
              prefix={
                <Icon type="heart" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="Favorite Food"
              onChange={v => console.log(v.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('rating', {
            initialValue: 3
          })(<Rate />)}
        </Form.Item>
        <Form.Item>
          <Button>Cancel</Button>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'normal_login' })(Adder);
