import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
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
