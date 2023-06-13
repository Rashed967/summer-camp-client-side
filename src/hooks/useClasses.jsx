import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useClasses = () => {

    const {data : classes = [], isLoading : classesLoading, refetch} = useQuery({
        queryKey : ["classes"],
        queryFn : async () => {
            const res = await axios.get('https://b7a12-summer-camp-server-side-rashed967.vercel.app/classes')
            return res.data
        }
    })
    
    return [classes, classesLoading, refetch]
};

export default useClasses;