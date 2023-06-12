import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Button, Space, Table } from 'antd';
import useClasses from '../../hooks/useClasses';

const ManageClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const [classes, classesLoading] = useClasses()
    console.log(classes)
    
   
    // const [email, setEmail] = useState('')
    if(loading){
    <p>Loading...</p>
    }
    
    const queryClient = useQueryClient();
    
    const deleteData = async (id) => {
        const response = await axios.delete(`http://localhost:5000/bookedClasses/${id}`);
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
      
      const handleApprove = id => {
        console.log(id)
      }


    const {data : selectedClasses = [], isLoading : selectedClassLoading, refetch} = useQueryClient({
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
          title: 'Image',
          dataIndex: "image",
          key: 'image',
          render: (text, record) => <img src={record.image} alt="" width="100px" height="100px" />,
        },
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
          title: 'Instructor Email',
          key: 'email',
          dataIndex: 'email',
        },

        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button onClick={() => handleApprove(record._id)} className='bg-purple-600' type='primary'>Approve</Button>
              <Button onClick={() => handldePay(record._id)} className='bg-danger-700' type='primary'>Denay</Button>
              <Button onClick={() => handldePay(record._id)} className='bg-pink-700' type='primary'>Send Feedback</Button>
              
            </Space>
          ),
        },
      ];
    



    return  <Table columns={columns} dataSource={classes} />
};

export default ManageClasses;