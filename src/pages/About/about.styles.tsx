import { styled, Typography } from "@mui/material";

const StyleImg = styled("img")(({ theme }) => ({
  width: "100%",
}));
const StyledAblationTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Ablation",
  maxWidth: "40rem",
  textAlign: "center",
}));
const StyledTanNimbusTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Tan Nimbus",
  textAlign: "center",
}));
const MinorTanNimbusHeader = styled(StyledTanNimbusTypo)`
  margin: 3rem 0 1rem 0;
`;
export {
  StyleImg,
  StyledAblationTypo,
  StyledTanNimbusTypo,
  MinorTanNimbusHeader,
};
