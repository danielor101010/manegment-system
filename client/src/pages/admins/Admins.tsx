import React from 'react';
import { useGetUsers } from '../../hooks/queries/userHookes';
import CardComponent from '../../components/card/card';
import { Box, CircularProgress, Typography } from '@mui/material';
import BaseLayout from '../../baseLayout/BaseLayout';

function Admins() {
  const { isLoading, data = [], error, isError } = useGetUsers();

  const admins = data.filter((user) => user.isAdmin);

  return (
    <BaseLayout>

    <Box display="flex" justifyContent="center" alignItems="center">
      {isLoading ? (
        <CircularProgress />
      ) : isError || !admins ? (
        <Typography variant="body1" color="error">
          {error ? error.message : 'Error fetching admins'}
        </Typography>
      ) : (
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          {admins.map((admin) => (
            <CardComponent key={admin.email} user={admin} />
          ))}
        </Box>
      )}
    </Box>
    </BaseLayout>

  );
}

export default Admins;
