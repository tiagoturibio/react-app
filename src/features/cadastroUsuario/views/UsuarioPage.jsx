import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import TabelaUsuario from "./TabelaUsuario";
import TabelaBody from "./TabelaBody";
import LinhaUsuario from "./LinhaUsuario";
import TabelaHeader from "./TabelaHeader";

const UsuarioPage = (props) => {
  const { usuarios, listarUsuarios, ativarUsuario, excluirUsuario } = props;
  const colunas = [
    { alinhamento: "center", nome: "ID" },
    { alinhamento: "center", nome: "Nome" },
    { alinhamento: "center", nome: "Permissão" },
    { alinhamento: "center", nome: "Ativo" },
    { alinhamento: "center", nome: "Ações" },
  ];
  useEffect(() => {
    listarUsuarios();
  }, [listarUsuarios]);
  return (
    <Grid container className="App" justify="center" direction="row">
      <TabelaUsuario
        data={usuarios}
        ativarUsuario={ativarUsuario}
        templateBody={
          <TabelaBody
            data={usuarios}
            render={(usuario) => (
              <LinhaUsuario
                key={usuario.id}
                usuario={usuario}
                ativarUsuario={ativarUsuario}
                excluirUsuario={excluirUsuario}
              />
            )}
          />
        }
        templateHeader={<TabelaHeader colunas={colunas} />}
      />
    </Grid>
  );
};

export default UsuarioPage;
