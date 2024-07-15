import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "./Logo.svg";

import {
  HeadBarContentGridContainer,
  HorizontalMenuButtonBox,
  StyledAppBar,
  StyledToolBar,
} from "./HeadBarStyles";
import { paths } from "./../../constants";

import { NavLink as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
const pages = Object.values(paths);
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();
  return (
    <StyledAppBar>
      <StyledToolBar disableGutters>
        <HeadBarContentGridContainer>
          <Logo />
          <Box
            sx={{
              flexGrow: 0,
              display: { sm: "flex", md: "none", lg: "none" },
              gridArea: { md: "hamburger" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { md: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.value} onClick={handleCloseNavMenu}>
                  <Button
                    component={RouterLink}
                    to={page.value}
                    key={page.value}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: (theme as any).palette.secondary.main,
                      display: "block",
                    }}
                  >
                    {page.displayName}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HorizontalMenuButtonBox>
            {pages.map((page) => (
              <Button
                component={RouterLink}
                to={page.value}
                key={page.value}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: (theme as any).palette.secondary.main,
                  display: "block",
                  "&:hover": {
                    filter:
                      "brightness(0) saturate(100%) invert(10%) sepia(38%) saturate(2849%) hue-rotate(194deg) brightness(101%) contrast(108%)",
                  },
                }}
              >
                {page.displayName}
              </Button>
              // <RouterLink to={page}>{page}</RouterLink>
            ))}
          </HorizontalMenuButtonBox>
        </HeadBarContentGridContainer>
      </StyledToolBar>
    </StyledAppBar>
  );
}
export { ResponsiveAppBar };
