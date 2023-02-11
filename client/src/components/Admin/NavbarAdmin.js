import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, IconButton, Container, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import * as React from "react";

export const NavBar = () => (
    <Paper
      elevation={3}
      style={{ width: "94%", position: "relative", left: "3%", top: "10%" }}
    >
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "white", borderRadius: "4px" }}>
          <Typography variant="h6" style={{ color: "black" }}>
            Admin Overview
          </Typography>
          <Box flexGrow={1} />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
          <Typography variant="subtitle2" style={{ color: "black" }}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );