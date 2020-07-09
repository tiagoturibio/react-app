import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core";
import BotaoSwitch from "./BotaoSwitch";
import PropTypes from "prop-types";

const LinhaUsuario = React.memo(
  ({ usuario, ativarUsuario, excluirUsuario }) => {
    const onChange = (estado) => {
      ativarUsuario(usuario, estado);
    };

    console.log(`render linha usuario ${usuario.id}`);

    return (
      <TableRow key={usuario.id}>
        <TableCell scope="row" align="center">
          {usuario.id}
        </TableCell>
        <TableCell align="center">{usuario.nome}</TableCell>
        <TableCell align="center">{usuario.permissao}</TableCell>
        <TableCell align="center">
          <BotaoSwitch ativo={usuario.ativo} onChange={onChange} />
        </TableCell>
        <TableCell align="center">
          <Button onClick={() => excluirUsuario(usuario)}>Excluir</Button>
        </TableCell>
      </TableRow>
    );
  },
  (prev, next) => prev.usuario.ativo === next.usuario.ativo
);

LinhaUsuario.propTypes = {
  usuario: PropTypes.object,
  ativarUsuario: PropTypes.func,
  excluirUsuario: PropTypes.func,
};

export default LinhaUsuario;
