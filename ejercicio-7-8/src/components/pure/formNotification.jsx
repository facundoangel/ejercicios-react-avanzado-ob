import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Button from "@mui/material/Button";

const FormNotification = () => {
  const titleRef = useRef();
  const messageRef = useRef();

  const showNotification = () => {
    const title = titleRef.current.children[1].children[0].value;
    const message = messageRef.current.children[1].children[0].value;

    fetch("http://localhost:8000/notification", {
      method: "POST",
      body: JSON.stringify({
        title,
        message,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <form>
      <h1>Crear Notificacion:</h1>
      <Grid2 container spacing={6}>
        <Grid2 item xs={12} sm={6}>
          <TextField
            ref={titleRef}
            sx={{ width: "100%" }}
            id="Titulo"
            label="Titulo"
            variant="filled"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            ref={messageRef}
            sx={{ width: "100%" }}
            id="des"
            label="Descripcion"
            variant="filled"
          />
        </Grid2>
      </Grid2>
      <Button
        onClick={showNotification}
        sx={{ margin: "3rem 0" }}
        variant="outlined"
        autofocus
      >
        Generar
      </Button>
    </form>
  );
};

export default FormNotification;
