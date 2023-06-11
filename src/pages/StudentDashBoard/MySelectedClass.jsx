import React, { useEffect } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query';




const MySelectedClass = () => {
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
            const respons = await axios.get('http://localhost:5000/bookedClasses')
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
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button onClick={() => handldePay(record._id)} className='bg-purple-600' type='primary'>Payment</Button>
              <Button onClick={() =>handleDelete(record._id)} className='bg-danger-700' type='primary'>Delete</Button>
              
            </Space>
          ),
        },
      ];
    



    return  <Table columns={columns} dataSource={selectedClasses} />
}

export default MySelectedClass;