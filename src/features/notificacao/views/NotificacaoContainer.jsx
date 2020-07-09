import React from "react";
import { connect } from "react-redux";
import { ocultarNotificacao } from "../redux/notificacaoActions";
import Notificacao from "./Notificacao";

const NotificacaoContainer = (props) => {
  return <Notificacao {...props} />;
};

const mapDispatchToProps = {
  ocultarNotificacao,
};

const mapStateToProps = ({ notificacao }) => {
  return {
    mensagem: notificacao.mensagem,
    exibir: notificacao.exibir,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificacaoContainer);
