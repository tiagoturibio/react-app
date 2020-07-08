import { combineReducers } from "redux";
import usuarioReducer from "../features/cadastroUsuario/redux/usuarioReducers";

export default combineReducers({
  usuario: usuarioReducer,
});
