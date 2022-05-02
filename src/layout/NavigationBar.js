import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  return (
    <AppBar position="static" style={{ background: "#008000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Nathan Carney
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
