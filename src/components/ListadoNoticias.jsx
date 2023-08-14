import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";
import { Pagination, Stack } from "@mui/material";

const ListadoNoticias = () => {
  const { noticias } = useNoticias();

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Ultimas noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.url} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          marginY: 5,
        }}
      >
        <Pagination
          count={10} //Paginas que genera automaticamente
          color="primary"
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;