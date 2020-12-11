import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import SpecialistPageProjectTable from './specialistProjectTable/SpecialistProjectTable'




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  
  heroButtons: {
    marginTop: theme.spacing(8),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  
  cardContent: {
    flexGrow: 1,
  },
  
}));

const cards = [
    {
        name: "Profile",
        path: "dashboard",
        component: <SpecialistPageProjectTable />
      },
      {
        name: "Project",
        path: "dashboard",
        
      },
      {
        name: "Labour",
        path: "dashboard",
        
      },
];

export default function PageProjectTable() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        
         <div>   
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    component={RouterLink}
                    to={"/login"}
                    variant="contained"
                    color="primary"
                  >
                    Map
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>


        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                      {card.component}
                  </CardContent>
                  <CardActions>
                    <Button
                      color="#AE3034"
                      variant="outlined"
                      component={RouterLink}
                      to={`/${card.path}`}
                      fullWidth
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  );
}
