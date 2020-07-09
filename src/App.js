import React from "react";
import UsuarioContainer from "./features/cadastroUsuario/views/UsuarioContainer";
import NotificacaoContainer from "./features/notificacao/views/NotificacaoContainer";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const App = () => {
  console.log("rerendred");
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Menu</Typography>
        </Toolbar>
      </AppBar>
      <UsuarioContainer />
      <NotificacaoContainer />
    </React.Fragment>
  );
};

export default App;
