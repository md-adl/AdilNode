import AuthForm from "./Autform";



const DataUser = () => {
  
  const handleAuthSuccess = () => {
    console.log('Authentication successful!');
    // Handle any further actions on successful authentication
  };
  return (
    <div>
       <AuthForm onAuthSuccess={handleAuthSuccess} />
    </div>
  );
};

export default DataUser;
