import { Box, Grid, Container, Typography } from "@mui/material";
import InicioCard from "../common/InicioCard";
import ChartCard from "./ChartCard";
import BasePie from "./BasePie";
import BaseBar from "./BaseBar";

// Contenido para las tarjetas de inicio
const productosContent = {
    url: './logo/comida.png',
    title: 'Productos',
    content: 'Añade nuevos platos o actualiza los precios para mejorar la experiencia de tus clientes.',
};

const empresasContent = {
    url: './logo/empresa.png',
    title: 'Empresas',
    content: 'Agrega, actualiza o elimina información sobre tus empresas asociadas.'
};

const promocionesContent = {
    url: './logo/promo.png',
    title: 'Promociones',
    content: 'Personaliza tus ofertas y haz que destaquen para que tus clientes no puedan resistirse.',
};

// Estilo para las tarjetas
const cardStyle = {
    width: "100%",
    height: "100%",
};

//Renderización del componente
//<img src="./logo/bienvenido.png" alt="Bienvenido" style={{ display: 'block', margin: 'auto', width: '200px', height: 'auto' }} />
const Inicio: React.FC = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, pl: 9, pt: 4, backgroundColor: '#f0f0f0' }}>
            <Container>
                <Typography component="h1" variant="h5" color="initial" align="center" >Bienvenido</Typography>
                <Grid container spacing={3} sx={{ alignContent: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={cardStyle}>
                            <InicioCard content={productosContent} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={cardStyle}>
                            <InicioCard content={empresasContent} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={cardStyle}>
                            <InicioCard content={promocionesContent} />
                        </Box>
                    </Grid>

                </Grid>
                <Typography component="h1" variant="h5" color="initial" align="center" >Estadísticas</Typography>
                <Grid container spacing={3} sx={{ py: 2, alignContent: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={12} sx={{ height: '400px' }}> 
                        <ChartCard title="">
                            <BaseBar />
                        </ChartCard>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ py: 2, alignContent: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={12}>
                        <ChartCard title="">
                            <BasePie />
                        </ChartCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Inicio;
