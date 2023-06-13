
import useClasses from '../../hooks/useClasses';
import { ArrowRightOutlined } from '@ant-design/icons';
import {  Button, Card } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { Meta } = Card;


const ApprovedClasses = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    console.log(user)
    const [classes, classesLoading, refetch] = useClasses()
    if(classesLoading){
        <p>Loading...</p>
        
    }
    const selectClass = (id) => {
        if(!user){
           return navigate('/login')
        }
        const bookedClass = classes.find(cl => cl._id === id)
        console.log(bookedClass)
        axios.post('https://b7a12-summer-camp-server-side-rashed967.vercel.app/bookedClasses', bookedClass)
        .then(respons => {
            console.log(respons)
        })
        .catch(error => {
            console.error(error)
        })
        
    }

   
    const approved = classes.filter(c => c.status === 'approved')

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                approved.map(cl => <Card className='mb-2'  key={cl._id}
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src={cl.image}
                            />
                        }
                        actions={[
                            `price : ${cl.price}`,
                            `Seats : ${cl.availableSeats}`,
                            <Button onClick={() => selectClass(cl._id)} type="primary" className='bg-blue-600 flex items-center' block><ArrowRightOutlined/> Select</Button>,
                        ]}
                        >
                        
                    <Meta
                        title={cl.name}
                        description={`Instructor : ${cl.instructor}`}
                    />
                    
                </Card>)
            }

        </div>
    );
};

export default ApprovedClasses;