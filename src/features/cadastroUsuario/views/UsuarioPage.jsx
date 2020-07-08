import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import TabelaUsuario from "./TabelaUsuario";

const UsuarioPage = (props) => {
  const { usuarios, listarUsuarios, ativarUsuario } = props;
  useEffect(() => {
    listarUsuarios();
  }, [listarUsuarios]);
  return (
    <Grid container className="App" justify="center" direction="row">
      <TabelaUsuario data={usuarios} ativarUsuario={ativarUsuario} />
    </Grid>
  );
};

export default UsuarioPage;
