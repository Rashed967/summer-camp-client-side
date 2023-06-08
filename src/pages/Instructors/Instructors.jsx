import React from 'react';
import useInstructor from '../../hooks/useInstructor';
import { Card } from 'antd';

const { Meta } = Card;

const Instructors = () => {
    const [instructors, instructorLoading, refetch] = useInstructor()
    console.log(instructors)
    return (
        <div>
            {
                instructors.map(instructor => <Card key={instructor._id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://shorturl.at/ahSY6" />}
                >
                    <Meta title={instructor.name} description="www.instagram.com" />
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Card>)
            }

        </div>
    );
};

export default Instructors;