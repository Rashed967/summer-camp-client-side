import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    // const {createUser} = useContext(AuthContext)
   
    const onFinish = (values) => {
        const {name, email, password, confirm,photoUrl, gender} = values
        console.log(name, email,password, confirm ,photoUrl, gender)
      
        
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="w-3/4 mx-auto">   
            <h2>login page</h2>
            <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Confirm-password"
      name="confirm"
      rules={[
        {
          required: true,
          message: 'Please confirm your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="PhotoUrl"
      name="photoUrl"
      rules={[
        {
          required: false,
          message: 'Please provide your photo link!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Select
          placeholder="Select a gender"
        
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>


    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
     <p><span >Already have an account?</span> <Link className="text-blue-600" to="/login">login</Link></p>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    
      <Button className="bg-blue-900" type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
  </Form>
            
        </div>
    );
};

export default Register;