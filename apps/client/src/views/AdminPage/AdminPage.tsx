import React from "react";
import { useQuery, useMutation } from "react-query";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/user.service";

const AdminPage: React.FC = () => {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("users", getUsers);

  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      refetch(); // refetch users after creating a new user
    },
  });

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      refetch(); // refetch users after updating a user
    },
  });

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      refetch(); // refetch users after deleting a user
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // @ts-ignore
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {/* Display your user data here */}
          <button
            onClick={() => updateUserMutation.mutate({ id: user.id, data: {} })}
          >
            Update
          </button>
          <button onClick={() => deleteUserMutation.mutate(user.id)}>
            Delete
          </button>
        </div>
      ))}

      <div>
        {/* Replace this with a form to create a new user */}
        <button onClick={() => createUserMutation.mutate({})}>Add User</button>
      </div>
    </div>
  );
};

export default AdminPage;
