const ProtectedRoute = ({ children }) => {
    const uid = useSelector((state) => state.user.uid); // Replace with your Redux state selector
    const router = useRouter();
  
    // Check if user data exists
    if (!uid) {
      // Redirect to the login page
      router.push('/login');
      return null; // Return null to prevent rendering of the protected content
    }
  
    return children; // Render the protected content
};