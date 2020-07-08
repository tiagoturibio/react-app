export const LISTAR_USUARIOS = "usuario/LISTA_USUARIOS";

export const listarUsuarios = (usuarios) => {
  return {
    type: LISTAR_USUARIOS,
    payload: {
      Usuarios: usuarios,
    },
  };
};
