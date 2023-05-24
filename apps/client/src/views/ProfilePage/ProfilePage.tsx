import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../../services/user.service';
import { useParams } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  // Use useParams to get the id from the URL.
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>404 No User Found</div>;
  }
  
  const { data: user, isLoading, error } = useQuery(['user', id], () => getUser(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    //@ts-ignore
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <div>
    </div>
  );
};

export default ProfilePage;
