import React from 'react'
import CardComponent from '../../components/card/card'
import BaseLayout from '../../baseLayout/BaseLayout'
import { CircularProgress } from '@mui/material';
import { useGetUsers } from '../../hooks/queries/userHookes';

function AdminDashboard() {
  const { data: users, isLoading, isError } = useGetUsers(); 
  return (
    <BaseLayout>
      {isLoading ? (
        <CircularProgress /> 
      ) : isError || !users ? (
        <div>Error fetching users</div> 
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {users.map((user) => (
            <CardComponent key={user.email} user={user} />
          ))}
        </div>
      )}
    </BaseLayout>
  );
}

export default AdminDashboard;
