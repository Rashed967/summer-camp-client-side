
import useClasses from '../../hooks/useClasses';
import { ArrowRightOutlined } from '@ant-design/icons';
import {  Button, Card } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;


const ApprovedClasses = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [classes, classesLoading, refetch] = useClasses()
    if(classesLoading){
        <p>Loading...</p>
        
    }
    const selectClass = () => {
        if(!user){
           return navigate('/login')
        }
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
                            <Button onClick={selectClass} type="primary" className='bg-blue-600 flex items-center' block><ArrowRightOutlined/> Select</Button>,
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