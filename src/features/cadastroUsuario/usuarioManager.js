import * as usuarioService from "./usuarioService";

export const listarUsuarios = () => {
  return usuarioService.listarUsuarios();
};

export const ativarUsuario = (usuario, estado) => {
  return usuarioService.ativarUsuario(usuario, estado);
};

export const excluirUsuario = (usuario) => {
  return usuarioService.excluirUsuario(usuario);
};
