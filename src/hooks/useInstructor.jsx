import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useInstructor = () => {

    const {data : instructors = [], isLoading : instructorLoading, refetch} = useQuery({
        queryKey : ['instructors'],
        queryFn : async () => {
            const res = await axios.get('http://localhost:5000/instructors')
            return res.data
        }
    })

    return [instructors, instructorLoading, refetch]
};

export default useInstructor;