import React, { useEffect } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';



const MySelectedClass = () => {


    const {data : selectedClasses = [], isLoading : selectedClassLoading, refetch} = useQuery({
        queryKey : ['selectedClasses'],
        queryFn : async () => {
            const respons = await axios.get('http://localhost:5000/bookedClasses')
            if(selectedClassLoading){
                <p>Loading</p>
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
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button className='bg-purple-600' type='primary'>Payment</Button>
              <Button className='bg-danger-700' type='primary'>Delete</Button>
              
            </Space>
          ),
        },
      ];
    



    return  <Table columns={columns} dataSource={selectedClasses} />
}

export default MySelectedClass;