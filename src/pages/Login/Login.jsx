import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from 'antd';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {createUser} = useContext(AuthContext)
   
    const onFinish = (values) => {
        const {email, password, } = values
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)         
            alert("creater user successfully")
        })
        
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
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
     <p><span >New to this site?</span> <Link className="text-blue-600" to="/register">register</Link></p>
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

export default Login;