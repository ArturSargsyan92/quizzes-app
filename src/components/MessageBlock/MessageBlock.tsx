import React from "react";
import "./MessageBlock.css";
import { useNavigate } from "react-router-dom";

type MessageBlockProps = {
  message: string;
};

function MessageBlock({ message }: MessageBlockProps): React.ReactElement {
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

export default React.memo(MessageBlock);
