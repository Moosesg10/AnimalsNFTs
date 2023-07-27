import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Info from "./InfoContent";
import InfoIcon from "@mui/icons-material/Info";
import styled from "@emotion/styled";

const Span = styled.span`
  color: ${({ color }) => color};
`;

export default function Infos() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box
      sx={{
        width: 40,
        position: "absolute",
        bottom: "1vh",
        right: "2vh",
        zIndex: "999",
      }}
    >
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        sx={{ zIndex: "999", backgroundColor: "transparent" }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ backgroundColor: "#090909ae", color: "#ffff" }}>
              <Typography sx={{ p: 2 }}>
                {Info.map((info) => (
                  <li
                    key={info.id}
                    style={{
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "right",
                      alignItems: "center",
                      gap: "1em",
                    }}
                  >
                    <img
                      src={info.img}
                      alt={info.name}
                      width="40px"
                      height="40px"
                    />
                    <Span color={info.color}>{info.name}</Span>
                  </li>
                ))}
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick("top-start")} sx={{ color: "#ffff" }}>
            <InfoIcon sx={{ fontSize: "3.5em" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
