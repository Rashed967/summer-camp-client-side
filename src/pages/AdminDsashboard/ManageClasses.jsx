import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Button, Space, Table } from 'antd';
import useClasses from '../../hooks/useClasses';

const ManageClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const [classes, classesLoading] = useClasses()
    // console.log(classes)
    
   
    // const [email, setEmail] = useState('')
    if(loading){
    <p>Loading...</p>
    }
    
    const queryClient = useQueryClient();
    
    const deleteData = async (id) => {
        const response = await axios.delete(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/bookedClasses/${id}`);
        refetch
        return response.data;
    };

    const mutationDelete = useMutation(deleteData, {
        onSuccess: () => {
            queryClient.invalidateQueries('selectedClasses');
          },
    });
    
      const handleDelete = (id) => {
        mutationDelete.mutate(id);
        console.log(id)
        
      };
      

    

    const {data : selectedClasses = [], isLoading : selectedClassLoading, refetch} = useQueryClient({
        queryKey : ['selectedClasses'],
        queryFn : async () => {
            const respons = await axios.get(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/classessByEmail?email=hossain@mail.com`)
            if(selectedClassLoading){
                <p>Loading</p>
                refetch()
            }
            return respons.data
        }
        
    })
    
    // update classes status 
    const updateClassStatus = async (classId) => {
      try {
        await axios.put(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/classes/${classId}`, { status: 'approved' });
        // Status updated successfully
        refetch
      } catch (error) {
        // Handle error
      }
    };

    const mutationUpdate = useMutation((classId) => updateClassStatus(classId));

  const handleApprove = (classId) => {
    mutationUpdate.mutate(classId);
   
  };


  const updateClassStatusToDenied = async (classId) => {
    try {
      await axios.put(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/classes/${classId}`, { status: 'denied' });
      // Status updated successfully
    } catch (error) {
      // Handle error
    }
  };
  
  // ...

  const mutationDenied = useMutation((classId) => updateClassStatusToDenied(classId));
  
  const handleDeny = (classId) => {
    mutationDenied.mutate(classId);
  };

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
              <Button disabled={record.status === 'approved' || record.status === 'denied'} onClick={() => handleApprove(record._id)} className='bg-purple-600' type='primary'>Approve</Button>
              <Button disabled={record.status === 'approved' || record.status === 'denied'} onClick={() => handleDeny(record._id)} className='bg-danger-700' type='primary'>Denay</Button>
              <Button onClick={() => handleDeny(record._id)} className='bg-pink-700' type='primary'>Send Feedback</Button>
              
            </Space>
          ),
        },
      ];
    



    return  <Table columns={columns} dataSource={classes} />
};

export default ManageClasses;