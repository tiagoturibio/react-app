import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import TabelaUsuario from "./TabelaUsuario";

const UsuarioPage = (props) => {
  const { usuarios, listarUsuarios } = props;
  useEffect(() => {
    listarUsuarios();
  }, [listarUsuarios]);
  return (
    <Grid container className="App" justify="center" direction="row">
      <TabelaUsuario data={usuarios}></TabelaUsuario>
    </Grid>
  );
};

export default UsuarioPage;
