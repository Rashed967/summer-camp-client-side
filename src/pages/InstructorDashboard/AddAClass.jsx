import React, { useContext } from 'react';
import { Button,  Form, Input, InputNumber,  } from 'antd';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';



const AddAClass = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.email)

    // const onFinish = (values) => {
    //     console.log('Success:', values);

        
    //   };
    //   const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    //   };

    const queryClient = useQueryClient();

    const addClassMutation = useMutation((classData) => {
      // Add the status property to the class data
      const newClassData = {
        ...classData,
        status: 'pending', // Set the status to your desired value
      };
  
      return axios.post('https://b7a12-summer-camp-server-side-rashed967.vercel.app/classes', newClassData);
    }, {
      onSuccess: (respons) => {
        // Invalidate the classes query to trigger a refetch
        queryClient.invalidateQueries('classes');
        alert("class added succesfully")
      },
    });
  
    const onFinish = (values) => {
      // Call the addClassMutation function to add the class
      addClassMutation.mutate(values);
      console.log(values)
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
       
    return (
       <div className=''>
        <h2 className='text-2xl text-center my-5 mb-5'>Add A class</h2>
         <>
        <Form
    name="basic"
    labelCol={{
      span: 10,
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
      label="Class image"
      name="image"
      rules={[
        {
          required: true,
          message: 'give your class image',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Class name"
      name="name"
      rules={[
        {
          required: true,
          message: ' Write your class name',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Instructor name"
      name="instructor"
      rules={[
        {
          
          message: 'Instructor Name',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="available Seats"
      name="availableSeats"
      
      rules={[
        {
           required : true,
          message: 'Total seat',
        },
      ]}
    >
      <InputNumber  />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      
      rules={[
        {
            type : 'email',
          message: 'email required',
        },
      ]}
    >
      <Input  />
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"
      rules={[
        {
          required: true,
          message: 'price required',
        },
      ]}
    >
      <InputNumber />
    </Form.Item>



    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className='bg-blue-600' type="primary" htmlType="submit">
        Add Class
      </Button>
    </Form.Item>
  </Form>
        </>
       </div>
    );
};

export default AddAClass;