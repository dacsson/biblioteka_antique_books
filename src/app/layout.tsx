import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Biblioff',
  description: 'Safonoffs antique books',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000, flex: 1 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper', borderBottom: "1px solid #333333" }}>
              <AutoStoriesIcon sx={{ color: '#696969', mr: 2, transform: 'translateY(-2px)' }} />
              <Typography variant="h6" color="text.primary">
                Biblioff
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <IconButton color="primary" sx={{ backgroundColor: "#333333", mr: 2  }} href="https://t.me/artemii_safonoff" target="_blank">
                  <TelegramIcon />
                </IconButton>
                <IconButton color="primary" sx={{ backgroundColor: "#333333", mr: 2  }} href="https://habr.com/ru/users/dacsson" target="_blank">
                  <DescriptionIcon />
                </IconButton>
                <IconButton color="secondary" sx={{ mr: 2  }} href="/">
                  <HomeIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
