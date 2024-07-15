import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import logoSrc from "@assets/lalaland-logo-main-product.svg";
import { Box, Toolbar } from "@mui/material";
const HeadBarContentGridContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  "& button": {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down("md")]: {
    display: "grid",
    gridTemplateAreas: "'hamburger logo logo'",
  },
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateAreas: `'logo logo logo'
                        ' .  menulinks  . '`,
  },
}));

const HeadBarLogo = styled("div")(({ theme }) => ({
  gridArea: "logo",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    height: "5rem",
    width: "20rem",
    backgroundColor: theme.palette.secondary.main,
    mask: `url('${logoSrc}') no-repeat center`,
    maskSize: "20rem",
    gridArea: "logo",
    justifySelf: "center",
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "relative",
  maxHeight: "12rem",
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    "&:before": {
      content: "''",
      backgroundColor: theme.palette.secondary.main,
      mask: `url('${logoSrc}') no-repeat center`,
      maskSize: "10rem",
      justifyContent: "start",
      width: "10rem",
      height: "100%",
      position: "absolute",
      left: "calc(50vw - 5rem)",
    },
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
}));
const HorizontalMenuButtonBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  justifyContent: "center",
  gridArea: "menulinks",
  "a.active": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
}));
export {
  HeadBarContentGridContainer,
  HeadBarLogo,
  StyledAppBar,
  StyledToolBar,
  HorizontalMenuButtonBox,
};
