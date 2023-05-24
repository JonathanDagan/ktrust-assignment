import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../services/user.service';

const ProfilePage: React.FC = () => {
  // Use useParams to get the id from the URL.
  const { id } = useParams<{ id: string }>();
  
  const { data: user, isLoading, error } = useQuery(['user', id], () => getUser(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <div>
      {/* Display your user data here */}
    </div>
  );
};

export default ProfilePage;
