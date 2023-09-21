import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function ProtectedRoute ({ children }) {
    const user = useSelector((state) => state.user); // Replace with your Redux state selector
    const router = useRouter();
  
    // Check if user data exists
    // if (!user.uid || user.error) {
    //   // Redirect to the login page
    //   router.push('/login');
    //   return null; // Return null to prevent rendering of the protected content
    // }
  
    return children; // Render the protected content
};