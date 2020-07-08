import React from "react";
import { TableBody } from "@material-ui/core";
import PropTypes from "prop-types";

const TabelaBody = (props) => {
  const { render, data } = props;
  return <TableBody>{data.map((value) => render(value))}</TableBody>;
};

TabelaBody.propTypes = {
  render: PropTypes.func,
  linhas: PropTypes.array,
};

export default TabelaBody;
