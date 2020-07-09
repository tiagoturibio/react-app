import { combineReducers } from "redux";
import usuarioReducer from "../features/cadastroUsuario/redux/usuarioReducers";
import notificacaoReducer from "../features/notificacao/redux/notificacaoReducers";

export default combineReducers({
  usuario: usuarioReducer,
  notificacao: notificacaoReducer,
});
