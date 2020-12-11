import { createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';

const seeRemRed = '#AE3034'
const seeRemWhite = '#F5F5F5'

export default createMuiTheme({
  palette: {
        common: {
            red: `${seeRemRed}`,
            white: `${seeRemWhite}`
        },
        primary: {
          main: `${seeRemRed}`,
        },
        secondary: {
          main: `${seeRemWhite}`,
        },
  },

  typography: {
        h4: {
            fontWeight: 600
        },
        tab: {
          fontFamily: "Roboto",
          fontWeight: "900",
          fontSize: "1rem",
          textTransform: "none",
        },
        exit: {
        fontSize: "1rem",
        textTransform: "none",
        fontFamily: "Roboto",
        color: "#AE3034"
        }


  },
  
});

