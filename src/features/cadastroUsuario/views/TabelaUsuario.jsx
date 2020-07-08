import React from "react";
import { Table, TableContainer, Paper } from "@material-ui/core";
import PropTypes from "prop-types";

const TabelaUsuario = (props) => {
  const { templateBody, templateHeader } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {templateHeader}
        {templateBody}
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
