import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import BotaoSwitch from "./BotaoSwitch";
import PropTypes from "prop-types";

const LinhaUsuario = (props) => {
  const { usuario } = props;
  return (
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
  );
};

LinhaUsuario.propTypes = {
  usuario: PropTypes.object,
};

export default LinhaUsuario;
