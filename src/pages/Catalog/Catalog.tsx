import { useTheme } from "@emotion/react";
import { Button, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
// import { xml2json } from "xml-js";

const images = require.context("./../../../public/assets/catalog", true);
const imageList = images.keys().map((image) => images(image));
// console.log(imageList);
function Item(props: { src: string }) {
  const { src } = props;
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img src={src} loading="lazy" />
    </Paper>
  );
}
const Catalog = () => {
  //   fetch("https://izziban.s3.us-east-2.amazonaws.com?list-type=2").then(
  //     (res) => {
  //       res.body
  //         .getReader()
  //         .read()
  //         .then((e) => {
  //           e.done;
  //           const string = new TextDecoder().decode(e.value);
  //           console.log(JSON.parse(xml2json(string)));
  //         });
  //     }
  //   );
  const theme = useTheme();
  return (
    <Carousel
      sx={{ width: "100%", minHeight: "100vh" }}
      navButtonsAlwaysVisible={true}
      animation={"slide"}
      duration={800}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: (theme as any).palette.secondary.main,
          borderRadius: 0,
        },
      }}
    >
      {imageList.map((src: string) => (
        <Item src={src} key={src} />
      ))}
    </Carousel>
  );
};
export default Catalog;
