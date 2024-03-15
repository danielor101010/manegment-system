import React from 'react'
import CardComponent from '../../components/card/card'
import BaseLayout from '../../baseLayout/BaseLayout'
import { useGetUsers } from '../../hooks/queries/userHookes';
import Workers from '../workers/Workers';
import Admins from '../admins/Admins';

function AdminDashboard() {
  const { data: users, isLoading, isError } = useGetUsers(); 

  return (
    <BaseLayout>
     
      <Workers/>      
      {/* <Admins/> */}
    
    </BaseLayout>
  );
}

export default AdminDashboard;
