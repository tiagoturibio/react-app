import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Switch,
  Button,
  TextField,
  FormControlLabel,
} from "@material-ui/core";

const UsuarioForm = (props) => {
  const { usuario, handleChange, handleSave } = props;
  return (
    <Grid container item>
      <Card>
        <CardContent>
          <Typography variant="h3" component="h1">
            Cadastro Usuário
          </Typography>
          <form noValidate autoComplete="off">
            <Grid container item spacing={3} direction="column">
              <Grid item>
                <Grid container item spacing={1}>
                  <Grid item xs>
                    <TextField
                      id="standard-basic"
                      label="Nome"
                      value={usuario.nome}
                      onChange={(event) => handleChange("nome", event.target.value)}
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="standard-basic"
                      label="Permissão"
                      value={usuario.permissao}
                      onChange={(event) => handleChange("permissao", event.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={usuario.ativo}
                      onChange={(event) => handleChange("ativo", event.target.checked)}
                      name="ativo"
                    />
                  }
                  label="Ativo"
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions>
          <Button
            disabled={!usuario.nome || !usuario.permissao}
            variant="contained"
            color="primary"
            onClick={() => handleSave(usuario)}
          >
            Salvar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UsuarioForm;
