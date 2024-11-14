import CssBaseline from "@mui/material/CssBaseline";
import AppNavbar from "./../dashboard/components/AppNavbar";
import SideMenu from "./../dashboard/components/SideMenu";
import AppTheme from "./../shared-theme/AppTheme";
import Box from "@mui/material/Box";

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./../dashboard/theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

function Layout({ children, onSidebarChange }) {
  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu selectedIndex={0} onSidebarChange={onSidebarChange} />
        <AppNavbar />
        {children}
      </Box>
    </AppTheme>
  );
}

export default Layout;
