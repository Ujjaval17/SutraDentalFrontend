import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./header.scss";
import Logo from "../../images/logo.png";
import { aboutPattern, adminPanelPattern, allTreatmentsPattern, blogsPattern, indexPattern, loginPattern } from "../../Routes";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const pages = ["Home", "Treatments", "Health Blogs", "About Me"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const location = useLocation();

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location.pathname]);

  const settings = [
    ...(token ? ["Admin Panel"] : []),
    token ? "Logout" : "Admin Login",
  ];

  const navigate = useNavigate();

  const handleNavigation = (page) => {
    console.log(page, "page");
    switch (page) {
      case "Home":
        navigate(indexPattern);
        break;

      case "Treatments":
        navigate(allTreatmentsPattern)
        break;

      case "Health Blogs":
        navigate(blogsPattern)
        break;

      case "About Me":
        navigate(aboutPattern);
        break;

      default:
        break;
    }
  };

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            zIndex: '100 !important',
          },
        },
      },
      MuiModal: {
        styleOverrides: {
          root: {
            zIndex: 200, // Set the z-index for the Modal
          },
        },
      },
    },
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const closeUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuAction = (action) => {
    closeUserMenu();
    if (action === "Admin Login" || action === "Login") {
      navigate(loginPattern);
    } else if (action === "Logout") {
      localStorage.removeItem("token");
      setToken(null);
      navigate(loginPattern);
    } else if (action === "Admin Panel") {
      navigate(adminPanelPattern);
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar style={{ zIndex: 100 }} position="sticky" elevation={0} color="default">
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            minHeight: { xs: 56, md: 64 },
            px: { xs: 0, sm: 0 },
            gap: { xs: 0, md: 1 },
            width: "100%",
            display: { xs: "grid", md: "flex" },
            gridTemplateColumns: { xs: "auto 1fr auto", md: "none" },
            alignItems: "center",
          }}
        >
          {/* Mobile: column 2 centers logo between hamburger (1) and avatar (3). Desktop: first flex child. */}
          <Box
            className="header-brand"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gridColumn: { xs: "2", md: "auto" },
              gridRow: { xs: "1", md: "auto" },
              justifySelf: { xs: "center", md: "stretch" },
              minWidth: { xs: 0, md: "auto" },
              flexShrink: { xs: 0, md: 0 },
              maxWidth: { xs: "min(220px, 72vw)", md: "none" },
              mr: { xs: 0, md: 3 },
              cursor: "pointer",
            }}
            onClick={() => navigate(indexPattern)}
            role="link"
            tabIndex={0}
            aria-label="Sutra Dental — Home"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(indexPattern);
              }
            }}
          >
            <span className="header-logo-wrap">
              <img src={Logo} alt="" className="header-logo-graphic" />
            </span>
          </Box>

          <Box
            sx={{
              gridColumn: { xs: "1", md: "auto" },
              gridRow: { xs: "1", md: "auto" },
              justifySelf: { xs: "start", md: "auto" },
              flexGrow: { xs: 0, md: 1 },
              flexShrink: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="medium"
              edge="start"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: { xs: -1, sm: 0 } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar-nav"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages?.map((page) => (
                <MenuItem key={page} onClick={() => { handleCloseNavMenu(); handleNavigation(page); }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gridColumn: { md: "auto" },
            }}
          >
            {pages?.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{ my: 2, mr: 8, color: "inherit", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, flexShrink: 0 }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: { md: 1 },
                mx: { md: 1 },
                px: { md: 1.25 },
                py: { md: 0.5 },
                color: "inherit",
                display: { xs: "none", md: "inline-flex" },
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                lineHeight: 1.2,
                maxWidth: { md: 220, lg: "none" },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  alignSelf: "stretch",
                }}
              >
                Sutra Dental
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  opacity: 0.92,
                  mt: 0.25,
                  alignSelf: "stretch",
                }}
              >
                DR. Khushbu Singh
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              flexShrink: 0,
              gridColumn: { xs: "3", md: "auto" },
              gridRow: { xs: "1", md: "auto" },
              justifySelf: { xs: "end", md: "auto" },
              ml: { xs: 0, md: "auto" },
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <div className="avatar">
                  <span className="fw-bold">KS</span>
                </div>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-user"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={closeUserMenu}
            >
              {settings?.map((setting) => (
                <MenuItem key={setting} onClick={() => handleUserMenuAction(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
