import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UsersService from "../../domains/users/users.service";
import MessagePage from "../MessagePage/MessagePage";

function Verify(): React.ReactElement {
  const location = useLocation();

  const [msg, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");
    const key = searchParams.get("key");
    const expiry = searchParams.get("expiry");

    if (email && key && expiry) {
      UsersService.verify(email, key, Number(expiry))
        .then(() => {
          setMessage("Your account verified successfully");
        })
        .catch(() => {
          setMessage("Invalid Verification URL");
        });
    } else {
      setMessage("Invalid Verification URL");
    }
  }, []);

  return (
    <div>
      {msg ? <MessagePage message={msg} /> : <div>Loading</div>}
    </div>
  );
}

export default Verify;
