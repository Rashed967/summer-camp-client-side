import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Space, Table } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyClassInstructor = () => {
    const {user, loading} = useContext(AuthContext)
   
    // const [email, setEmail] = useState('')
    if(loading){
    <p>Loading...</p>
    }
    
    const queryClient = useQueryClient();
    
    const deleteData = async (id) => {
        const response = await axios.delete(`http://localhost:5000/bookedClasses/${id}`);
        console.log(response.data)
        refetch
        return response.data;
    };
    const mutation = useMutation(deleteData, {
        onSuccess: () => {
            queryClient.invalidateQueries('selectedClasses');
          },
    });
    
      const handleDelete = (id) => {
        mutation.mutate(id);
        console.log(id)
        
      };
      
      const handldePay = id => {
        console.log(id)
      }


    const {data : selectedClasses = [], isLoading : selectedClassLoading, refetch} = useQuery({
        queryKey : ['selectedClasses'],
        queryFn : async () => {
            const respons = await axios.get(`http://localhost:5000/classessByEmail?email=hossain@mail.com`)
            
            if(selectedClassLoading){
                <p>Loading</p>
                refetch()
            }
            return respons.data
        }
        
    })

    const columns = [
        {
          title: 'Name',
          dataIndex: "name",
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Available Seats',
          dataIndex: 'availableSeats',
          key: 'availableSeats',
        },
        {
          title: 'Instructor',
          key: 'instructor',
          dataIndex: 'instructor',
        },
        {
          title: 'Total inrolled',
          key: 'totalInrolled',
          dataIndex: `totalInrolled`,
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
        },
        {
          title: 'Feedback',
          key: 'feedback',
          dataIndex: 'feedback',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button onClick={() => handldePay(record._id)} className='bg-purple-600' type='primary'>Update</Button>
            
              
            </Space>
          ),
        },
      ];
    



    return  <Table columns={columns} dataSource={selectedClasses} />
};

export default MyClassInstructor;