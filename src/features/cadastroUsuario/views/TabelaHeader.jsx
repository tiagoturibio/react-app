import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const TabelaHeader = (props) => {
  const { colunas } = props;
  return (
    <TableHead>
      <TableRow key={Math.random()}>
        {colunas.map((coluna) => {
          return (
            <TableCell key={Math.random()} align={coluna.alinhamento}>
              {coluna.nome}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

TabelaHeader.propTypes = {
  colunas: PropTypes.array,
};

export default TabelaHeader;
