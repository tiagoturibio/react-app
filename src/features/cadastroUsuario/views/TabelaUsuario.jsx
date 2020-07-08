import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import BotaoSwitch from "./BotaoSwitch";
import PropTypes from "prop-types";

const TabelaUsuario = (props) => {
  const { data } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Permissao</TableCell>
            <TableCell align="center">Ativo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((usuario) => (
            <TableRow key={usuario.id}>
              <TableCell scope="row" align="center">
                {usuario.id}
              </TableCell>
              <TableCell align="center">{usuario.nome}</TableCell>
              <TableCell align="center">{usuario.permissao}</TableCell>
              <TableCell align="center">
                <BotaoSwitch ativo={usuario.ativo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
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
