import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FormNotification from "../pure/formNotification";

const Main = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "75%",

          padding: "3rem",
          textAlign: "center",
        }}
      >
        <FormNotification />
      </Box>
    </Container>
  );
};

export default Main;
