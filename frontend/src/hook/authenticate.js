import { useRouter } from "next/router";
import { useSelector } from "react-redux";


export default function useAuthenticate() {
    const uid = useSelector((state) => state.user.uid)
    const router = useRouter();
    const requireAuthentication = (callback) => {
        if (uid) { 
            callback();
            return;
        }

        
        router.push('/login');
    }

    return {
        requireAuthentication
    }
}