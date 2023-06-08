import React from 'react';
import useInstructor from '../../hooks/useInstructor';
import { Card } from 'antd';

const { Meta } = Card;

const Instructors = () => {
    const [instructors, instructorLoading, refetch] = useInstructor()
    console.log(instructors)
    return (
        <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3 mt-20'>
            {
                instructors.map(instructor => <Card key={instructor._id}
                    hoverable
                    style={{ width: 350}}
                    cover={<img alt="example" src={instructor.image} />}
                >
                    <div className='space-y-2'>
                    <Meta title={instructor.name} />
                    <p>Email : {instructor.email}</p>
                    <p>Classes Taken : {instructor.classesTaken}</p>
                    <p>Classes : {instructor.classes.map(cl => <sapn className="ml-1">{cl},</sapn>)}</p>
                    </div>
                    
                </Card>)
            }

        </div>
    );
};

export default Instructors;