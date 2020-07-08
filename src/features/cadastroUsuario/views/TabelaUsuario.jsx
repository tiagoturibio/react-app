import React from "react";
import { Table, TableContainer, Paper } from "@material-ui/core";
import TabelaHeader from "./TabelaHeader";
import PropTypes from "prop-types";
import LinhaUsuario from "./LinhaUsuario";
import TabelaBody from "./TabelaBody";

const TabelaUsuario = (props) => {
  const { data, ativarUsuario } = props;
  const colunas = [
    { alinhamento: "center", nome: "ID" },
    { alinhamento: "center", nome: "Nome" },
    { alinhamento: "center", nome: "Permissão" },
    { alinhamento: "center", nome: "Ativo" },
  ];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TabelaHeader colunas={colunas} />
        <TabelaBody
          data={data}
          render={(usuario) => <LinhaUsuario key={usuario.id} usuario={usuario} ativarUsuario={ativarUsuario} />}
        />
      </Table>
    </TableContainer>
  );
};

TabelaUsuario.propTypes = {
  data: PropTypes.array,
};

TabelaUsuario.defaultProps = {
  data: [],
};

export default TabelaUsuario;
