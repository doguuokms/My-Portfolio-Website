// import { Link } from 'react-router-dom';
// import { makeStyles, useStyles } from '@material-ui/core/styles';
import { Typography,Link, List, ListItem, ListItemText, Box } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: theme.spacing(2),
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.primary.contrastText,
//     },
//     link: {
//       color: 'inherit',
//       textDecoration: 'none',
//     },
//   }));

  function Header() {
    return (
        <div>
            <Box sx={{
                padding: "20px",
                background:  "white",
            }}> 
                Dogukan
            </Box>
          <Link to="/">
            <Typography variant="h6">
              Dogukan
            </Typography>
          </Link>
          <div>
            <List component="nav" aria-label="navigation">
              <ListItem>
                <ListItemText primary="Hakkımda" />
              </ListItem>
              <ListItem>
                <ListItemText primary="İletişim" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Portfolyom" />
              </ListItem>
            </List>
          </div>
        </div>
      );
  }

  export default Header;