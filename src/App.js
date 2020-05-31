import React from "react";
import { AppContextProvider } from "./Components/AppBar/AppContext";
import MenuAppBar from "./Components/AppBar/MenuAppBar";
import BackToTop from "./Components/Zoom/Zoom";
import CircularIndeterminate from "./Components/Loader/circularLoader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MediaCard from "./Components/Card/Card";
import Grid from "@material-ui/core/Grid";
import PersistentDrawerLeft from "./Components/Drawer/Drawer";
import "./App.css";

function App() {
  return (
    <div>
      <PersistentDrawerLeft />
    </div>
    // <div>
    //   <AppContextProvider>
    //     <div className="App">
    //       <MenuAppBar />
    //     </div>
    //   </AppContextProvider>
    //   <Container>
    //     <React.Fragment>
    //       <CssBaseline />
    //       {/* <Container maxWidth="sm">
    //       <BackToTop />
    //       <center>
    //         <CircularIndeterminate />
    //       </center>
    //     </Container> */}
    //       <BackToTop />
    //       <Grid
    //         container
    //         direction="row"
    //         justify="space-around"
    //         alignItems="center"
    //         spacing={4}
    //       >
    //         <Grid item xs>
    //           {/* <Paper className={classes.paper}>xs</Paper> */}
    //           {/* <CircularIndeterminate /> */}
    //           <MediaCard />
    //         </Grid>
    //         <Grid item xs>
    //           {/* <CircularIndeterminate /> */}
    //           <MediaCard />
    //           {/* <Paper className={classes.paper}>xs</Paper> */}
    //         </Grid>

    //         <Grid item xs>
    //           {/* <CircularIndeterminate /> */}
    //           <MediaCard />
    //           {/* <Paper className={classes.paper}>xs</Paper> */}
    //         </Grid>
    //       </Grid>
    //     </React.Fragment>
    //   </Container>
    // </div>
  );
}

export default App;
