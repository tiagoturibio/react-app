import React from "react";
import { Snackbar } from "@material-ui/core";

const Notificacao = (props) => {
  const { exibir, mensagem, ocultarNotificacao } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={exibir}
      autoHideDuration={6000}
      message={mensagem}
      onClose={() => ocultarNotificacao()}
    />
  );
};

export default Notificacao;
