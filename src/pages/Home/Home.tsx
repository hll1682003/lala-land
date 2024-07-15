import React from "react";
import homePic from "@assets/home/c93090dbfc40578f5ee07fc6d0fc717c.jpg";
import { StyleImg } from "./home.styles";
import { Button, Paper, Typography } from "@mui/material";
import { popupCenter } from "./utils";

const Home: React.FC = () => {
  return (
    <>
      <StyleImg src={homePic} />
      <Paper
        elevation={4}
        sx={(theme) => ({
          color: theme.palette.secondary.main,

          display: "flex",
          flexDirection: "column",
          rowGap: "2rem",

          [theme.breakpoints.down("md")]: {
            position: "static",
            alignItems: "start",
            "& h2": {
              fontSize: "3rem",
              textAlign: "center",
            },
            "& p": { fontSize: "1rem" },
            "& button": { alignSelf: "center" },
            padding: "5rem",
          },
          [theme.breakpoints.up("md")]: {
            padding: "3rem",
            borderRadius: "2rem",
            position: "absolute",
            top: "28rem",
            maxWidth: "50rem",
            left: "5rem",
            alignItems: "start",
          },
        })}
      >
        <Typography
          sx={{ fontWeight: "var(--font-heading-weight)" }}
          variant="h2"
        >
          Wholesale Activewear for your store
        </Typography>
        <Button
          sx={(theme) => ({
            color: "white",
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
            padding: "1rem",
          })}
          onClick={() => {
            popupCenter({
              url: "https://forms.gle/EyumQCxm6Aacky8o6",
              h: 800,
              w: 700,
              title: "",
            });
          }}
        >
          <Typography>Wholesale Application</Typography>
        </Button>
      </Paper>
      <Paper
        sx={(theme) => ({
          "& p, h4": {
            textAlign: "center",
            lineHeight: "calc(1 + 0.8 / var(--font-body-scale))",
            color: theme.palette.secondary.main,
          },
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          padding: "2rem 5rem",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        })}
        elevation={5}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "var(--font-heading-weight)" }}
        >
          LA LA LAND Wholesale
        </Typography>
        <Typography sx={{ maxWidth: "40rem" }}>
          Experience the ultimate solution for customized wholesale activewear.
          Our high-quality products benchmark the top brands, yet come at
          affordable prices. Apply for the LA LA LAND wholesale program and
          request samples to start boosting your business today.
        </Typography>
      </Paper>
    </>
  );
};
export default Home;
