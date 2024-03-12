// Dashboard.js
import React from 'react';

const Dashboard = ({username, email}) => {
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {/* Add your dashboard content here */}
      <p>Greeting {username} and Your email {email}</p>
    </div>
  );
};

export default Dashboard;
