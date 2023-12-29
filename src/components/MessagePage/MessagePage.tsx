import React from "react";
import "./MessagePage.css";
import { useNavigate } from "react-router-dom";

type MessagePageProps = {
  message: string;
};

function MessagePage({ message }: MessagePageProps): React.ReactElement {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/");
  };

  return (
    <div className="message-block">
      <div className="inner-block">
        <p>{message}</p>
        <button type="button" onClick={goToLoginPage}>Go To Login Page</button>
      </div>
    </div>
  );
}

export default React.memo(MessagePage);
