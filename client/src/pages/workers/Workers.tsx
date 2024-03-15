import React from 'react';
import CardComponent from '../../components/card/card';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetUsers } from '../../hooks/queries/userHookes';
import BaseLayout from '../../baseLayout/BaseLayout';

function Workers() {
  const { isLoading, data = [], error, isError } = useGetUsers();

  return (
    <BaseLayout>

    <Box display="flex" justifyContent="center" alignItems="center">
      {isLoading ? (
        <CircularProgress />
      ) : isError || !data ? (
        <Typography variant="body1" color="error">
          {error ? error.message : 'Error fetching users'}
        </Typography>
      ) : (
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          {data.map((user) => (
            <CardComponent key={user.email} user={user} />
          ))}
        </Box>
      )}
    </Box>
    </BaseLayout>

  );
}

export default Workers;
