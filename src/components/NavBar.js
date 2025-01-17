import { Link } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = ({ handleLogout, isLoggedIn }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/profile">
              Profile
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/mentorsessions"
            >
              Mentor Sessions
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/menteesessions"
            >
              Mentee Sessions
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/sessionsignup"
            >
              Session Signup
            </MenuItem>
          </Menu>

          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <p className="nav--title">Momentum Mentors</p>
          </Typography>

          <div className="nav--authentication">
            {!isLoggedIn ? (
              <div>
                <Button
                  size="large"
                  type="submit"
                  component={Link}
                  to="/register"
                  // color="inherit"
                >
                  Sign up
                </Button>

                <Button
                  size="large"
                  type="submit"
                  component={Link}
                  to="/login"
                  // color="inherit"
                >
                  Log in
                </Button>
              </div>
            ) : (
              <Link to="/" onClick={handleLogout}>
                <Button type="submit">Log out</Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
