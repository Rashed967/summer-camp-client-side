import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useInstructor = () => {

    const {data : instructors = [], isLoading : instructorLoading, refetch} = useQuery({
        queryKey : ['instructors'],
        queryFn : async () => {
            const res = await axios.get('https://b7a12-summer-camp-server-side-rashed967.vercel.app/instructors')
            return res.data
        }
    })

    return [instructors, instructorLoading, refetch]
};

export default useInstructor;