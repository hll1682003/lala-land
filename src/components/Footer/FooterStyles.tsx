import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFooter = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  width: "100%",
  minHeight: "12vh",
  padding: "5rem 5rem 2rem 5rem",
  boxShadow: "0px -3px 9px 1px rgb(0 0 0 / 20%)",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "start",
  },
}));
export { StyledFooter };
