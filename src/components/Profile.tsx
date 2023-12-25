import React, { useState, useEffect } from 'react';
import { User } from '../domains/users/types/signup.types';
import UsersService from '../domains/users/users.service';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulated fetch request - replace this with your actual API call
    const fetchUser = async () => {
      try {
        const user = await UsersService.me()
        setUser(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // TODO handle errors
      }
    }

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.firstName} {user.lastName}!</h1>
          <p>Email: {user.email}</p>
          {/* Add other user profile information here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
