import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Button, Space, Table } from "antd";


const ManageUsers = () => {
    const {user, loading} = useContext(AuthContext)
    
    // const [email, setEmail] = useState('')
    if(loading){
        <p>Loading...</p>
    }
    console.log(user)
    
    const queryClient = useQueryClient();
    
    const deleteData = async (id) => {
        const response = await axios.delete(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/bookedClasses/${id}`);
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

        // update user to instructor 
    const userToInstructor = async (classId) => {
        try {
          await axios.put(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/users/${classId}`, { roll: 'Instructor' });
          // Status updated successfully
          refetch
        } catch (error) {
          // Handle error
        }
      };
  
      const mutationUpdate = useMutation((classId) => userToInstructor(classId));
  
    const makeInstructor = (classId) => {
        console.log(classId)
      mutationUpdate.mutate(classId);
     
    };


    // user to admin 


    const userToAdmin = async (classId) => {
        try {
          await axios.put(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/users/${classId}`, { roll: 'Admin' });
          // Status updated successfully
        } catch (error) {
          // Handle error
        }
      };
      
      // ...
    
      const mutationAdmin = useMutation((classId) => userToAdmin(classId));
      
      const makeAdmin = (classId) => {
        mutationAdmin.mutate(classId);
      };


    const {data : selectedClasses = [], isLoading : selectedClassLoading, refetch} = useQuery({
        queryKey : ['selectedClasses'],
        queryFn : async () => {
            const respons = await axios.get(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/users`)
            
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
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Roll',
          dataIndex: 'roll',
          key: 'roll',
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
              <Button onClick={() => makeInstructor(record._id)} className='bg-purple-600' type='primary'>Make instructor</Button>
              <Button onClick={() => makeAdmin(record._id)} className='bg-info-600' type='primary'>Make admin</Button>
            
              
            </Space>
          ),
        },
      ];
    



    return  <Table columns={columns} dataSource={selectedClasses} />
};

export default ManageUsers;