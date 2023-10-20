import { useEffect, useState } from "react";
import { BroadCastSingleton } from "../utils/gameBroadCast";

export const GamePage = () => {
  const channel = BroadCastSingleton.getInstance();
  const [message, setMessage] = useState("");

  useEffect(() => {
    channel.onmessage = (event: MessageEvent<any>) => {
      const recievedMessage = event.data;
      setMessage(recievedMessage);
    };
  }, [channel]);

  return (
    <div>
      <p>Display Message from Moderator View: "{message}"</p>
    </div>
  );
};
