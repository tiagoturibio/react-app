import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import TabelaUsuario from "./TabelaUsuario";
import TabelaBody from "./TabelaBody";
import LinhaUsuario from "./LinhaUsuario";
import UsuarioForm from "./UsuarioForm";
import TabelaHeader from "./TabelaHeader";

const UsuarioPage = (props) => {
  const { usuarios, listarUsuarios, ativarUsuario, excluirUsuario, salvarUsuario } = props;
  const estadoInicial = { nome: "", permissao: "", ativo: false };
  const [usuario, setUsuario] = useState(estadoInicial);

  const handleChange = (key, value) => {
    setUsuario({ ...usuario, [key]: value });
  };

  const handleSave = (usuario) => {
    salvarUsuario(usuario);
  };

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
    <Grid item container className="App" direction="row" spacing={3}>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
        <UsuarioForm usuario={usuario} handleChange={handleChange} handleSave={handleSave} />
      </Grid>
    </Grid>
  );
};

export default UsuarioPage;
