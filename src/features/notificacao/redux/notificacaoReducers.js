import { MOSTRAR_NOTIFICACAO, OCULTAR_NOTIFICACAO } from "./notificacaoActions";

export const initialState = {
  exibir: false,
  mensagem: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOSTRAR_NOTIFICACAO:
      return { ...state, mensagem: payload.mensagem, exibir: true };
    case OCULTAR_NOTIFICACAO:
      return { ...state, exibir: false };
    default:
      return state;
  }
};
