import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { set } from 'react-hook-form';

const Register = () => {
    const {createUser, googleSignIn, updateUserProfile} = useContext(AuthContext)
    const [error, setError] = useState('')
   
    const onFinish = (values) => {
      const { name, email, password, confirm, photoUrl, gender } = values;
      console.log(name, email, password, confirm, photoUrl, gender);
    
      if (password.length < 6) {
        return setError("At least 6 characters required");
      }
      if (!/[A-Z]/.test(password)) {
        return setError("At least one capital letter required");
      }
      if (!/[!@#$%^&*]/.test(password)) {
        return setError("At least one special character required");
      }
      if (password !== confirm) {
        return setError("Passwords do not match");
      }
    
      setError(""); // Reset error message
    
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          return updateUserProfile(name, photoUrl);
        })
        .then(() => {
          const saveUser = { name: name, email: email , roll : "student"};
          fetch('https://b7a12-summer-camp-server-side-rashed967.vercel.app/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
          alert("User created successfully");
        })
        .catch((error) => {
          // Handle any error that occurs during the process
          console.error(error);
        });
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    

      const signInWithGoogle = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)         
            alert("user logged in successfully")
        })
        .catch(error => {
            alert(error.message)
        }) 
      }
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
        

    {
     error &&   <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
       <p><span className='text-red-500'>{error}</span></p>
      </Form.Item>
    }

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
    <Form.Item className="text-center"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
        <p className="text-2xl font-medium border-b-4 pb-3 mb-3">Social Login</p>
   <div className="flex justify-center">
   <FcGoogle onClick={signInWithGoogle} className="text-3xl"></FcGoogle>
   </div>
    </Form.Item>
  </Form>
            
        </div>
    );
};

export default Register;