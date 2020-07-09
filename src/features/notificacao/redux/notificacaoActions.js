export const MOSTRAR_NOTIFICACAO = "notificacao/MOSTRAR_NOTIFICACAO";
export const OCULTAR_NOTIFICACAO = "notificacao/OCULTAR_NOTIFICACAO";

export const notificar = (mensagem) => {
  return {
    type: MOSTRAR_NOTIFICACAO,
    payload: {
      mensagem,
    },
  };
};

export const ocultarNotificacao = () => {
  return {
    type: OCULTAR_NOTIFICACAO,
  };
};
