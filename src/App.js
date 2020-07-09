import React from "react";
import UsuarioContainer from "./features/cadastroUsuario/views/UsuarioContainer";
import NotificacaoContainer from "./features/notificacao/views/NotificacaoContainer";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid container item>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Menu</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <UsuarioContainer />
      <NotificacaoContainer />
    </Grid>
  );
};

export default App;
