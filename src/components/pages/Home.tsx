import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Box sx={{ padding: "25px" }}>
      <Typography variant="body2">
        Open two pages with the button. If this doesn't work, use the links
        below
      </Typography>
      <Box sx={{ paddingTop: "20px" }}>
        <Button
          variant="contained"
          sx={{ background: "green" }}
          onClick={() => {
            window.open("/moderator");
            window.open("/game");
          }}
        >
          START GAME
        </Button>
      </Box>
      <Box sx={{ paddingTop: "20px" }}>
        <Typography variant="body2">Start Pages Manuel</Typography>
        <div>
          <Link to={"moderator"} target="_blank">
            Moderator View
          </Link>
        </div>
        <div>
          <Link to={"game"} target="_blank">
            Game View
          </Link>
        </div>
      </Box>
    </Box>
  );
};
