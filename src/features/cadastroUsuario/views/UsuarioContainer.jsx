import React from "react";
import UsuarioPage from "./UsuarioPage";
import { connect } from "react-redux";
import * as operations from "../redux/usuarioOperations";

const UsuarioContainer = (props) => {
  return <UsuarioPage {...props} />;
};

const mapDispatchToProps = {
  listarUsuarios: operations.listarUsuarios,
};

const mapStateToProps = ({ usuario }) => {
  return {
    usuarios: usuario.Usuarios,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsuarioContainer);
