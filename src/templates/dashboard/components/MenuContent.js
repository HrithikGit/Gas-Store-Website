import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse"; // Import Collapse for sub-menu
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Icon for collapse
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Icon for expand

// Main menu items
const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "Products", icon: <AnalyticsRoundedIcon /> },
  { text: "Customers", icon: <PeopleRoundedIcon /> },
  { text: "Orders", icon: <AssignmentRoundedIcon /> },
  { text: "Refunds Issued", icon: <InfoRoundedIcon /> },
];

// Sub-menu items for Products
const productSubMenuItems = [
  { text: "View Products" },
  { text: "Add Product" },
  { text: "Edit Product" },
];

export default function MenuContent({ selectedIndex, onSidebarChange }) {
  const [openProducts, setOpenProducts] = React.useState(false); // State to handle product sub-menu visibility

  const handleProductClick = () => {
    setOpenProducts(!openProducts); // Toggle product sub-menu
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {/* Render main menu items */}
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            {/* Check if it's the Products item to add click handler */}
            {item.text === "Products" ? (
              <>
                <ListItemButton
                  onClick={handleProductClick}
                  selected={index === selectedIndex}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  {openProducts ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                {/* Collapsible sub-menu for Products */}
                <Collapse in={openProducts} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {productSubMenuItems.map((subItem, subIndex) => (
                      <ListItem key={subIndex} sx={{ pl: 4 }} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={subItem.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              // For other items (Home, Customers, etc.)
              <ListItemButton
                selected={index === selectedIndex}
                onClick={() => onSidebarChange(item.text)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
