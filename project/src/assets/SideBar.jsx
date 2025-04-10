// Sidebar.jsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  Box,
  Divider,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  PlusOutlined,
  UserOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  PictureOutlined,
  HomeOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
const Sidebar = () => {
  const [channelsOpen, setChannelsOpen] = useState(true);
  const toggleChannels = () => setChannelsOpen(!channelsOpen);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          margin: "12px",
          width: "fit-content",
          zIndex: 10,
          gap: "30px",
        }}
      >
        <Avatar variant="square" src={p3} alt="p3" sx={{ width: 40, height: 40, mr: 1 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            border: "1px solid gray",
            px: 2,
            py: 0.5,
          }}
        >
          <Avatar
            variant="square"
            sx={{
              width: 20,
              height: 20,
              fontSize: 12,
              bgcolor: "#26A69A",
              mr: 1,
            }}
          >
            <span style={{ fontSize: "10px" }}>SS</span>
          </Avatar>
          <Box component="span" sx={{ fontSize: 14, fontWeight: 500 }}>
            Test_brand
          </Box>
          <ExpandMore sx={{ fontSize: 18, ml: 0.5 }} />
        </Box>
        <Box sx={{ ml: 1, cursor: "pointer", color: "green" }}>
          <DoubleLeftOutlined />
        </Box>
      </Box>

      <Box sx={{ display: "flex", mt: "20px" }}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 60,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 60,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "80px",
              height: "500px",
              py: 2,
              color: "#fff",
              borderRight: "none",
              boxShadow: "none",
            },
          }}
        >
          <Box>
            <Avatar
              src={p1}
              alt="logo1"
              sx={{ width: 40, height: 40, mb: 2 }}
            />
            <Avatar
              src={p2}
              alt="logo2"
              sx={{ width: 40, height: 40, mb: 2 }}
            />
            <Box
              sx={{
                mb: 2,
                cursor: "pointer",
                border: "1px solid",
                borderColor: "grey.400",
                borderRadius: 2,
                p: 1,
              }}
            >
              <PlusOutlined style={{ fontSize: 20, color: "green" }} />
            </Box>
          </Box>
          <Box>
            <UserOutlined
              style={{ color: "gray", marginLeft: "8px", fontSize: "25px" }}
            />
            <Avatar sx={{ bgcolor: "purple", marginTop: "4px" }}>
              <span style={{ fontSize: "10px" }}>SS</span>
            </Avatar>
          </Box>
        </Drawer>

        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 220,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 220,
              backgroundColor: "#fafafa",
              ml: "80px",
              mt: "80px",
              height: "500px",
              paddingTop: "8px",
              borderRight: "none",
              boxShadow: "none",
            },
          }}
        >
          <List>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>

            <ListItemButton onClick={toggleChannels}>
              <ListItemIcon>
                <FundProjectionScreenOutlined />
              </ListItemIcon>
              <ListItemText primary="Channels" />
              {channelsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={channelsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Meta Ads", "Google Ads", "Quick Commerce"].map((text) => (
                  <ListItemButton
                    key={text}
                    sx={{
                      pl: 9,
                      "&:hover .MuiListItemText-primary": {
                        color: "green",
                      },
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon>
                <PictureOutlined />
              </ListItemIcon>
              <ListItemText primary="Creatives" />
            </ListItemButton>
          </List>

          <Box sx={{ mt: "auto", p: 1 }}>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <QuestionCircleOutlined />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <SettingOutlined />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
