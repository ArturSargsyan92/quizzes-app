import React, { useState, useEffect } from "react";
import { User } from "../domains/users/types/users.types";
import UsersService from "../domains/users/users.service";

function Profile(): React.ReactElement {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulated fetch request - replace this with your actual API call
    const fetchUser = async () => {
      try {
        const userProfile = await UsersService.me();

        setUser(userProfile);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // TODO handle errors
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="profile">
      {user ? `${user.firstName} ${user.lastName}` : "...loading"}
    </div>
  );
}

export default Profile;
