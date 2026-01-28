import { Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box p={2}>
      <Typography variant="h4">Обо мне</Typography>
      <Typography>
        Frontend разработчик. React, Redux, MUI.
      </Typography>
    </Box>
  );
}