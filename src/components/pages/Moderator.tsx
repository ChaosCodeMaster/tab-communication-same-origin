import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { BroadCastSingleton } from "../utils/gameBroadCast";

export const ModeratorPage = () => {
  const channel = BroadCastSingleton.getInstance();
  const [input, setInput] = useState("");

  return (
    <div>
      <TextField
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></TextField>
      <Box sx={{ paddingTop: "20px" }}>
        <Button variant="contained" onClick={() => channel.postMessage(input)}>
          Click to send Message
        </Button>
      </Box>
    </div>
  );
};
