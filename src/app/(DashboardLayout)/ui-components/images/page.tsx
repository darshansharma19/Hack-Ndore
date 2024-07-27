'use client';
import React, { useState } from 'react';
import { AppBar, Button, Drawer, Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Toolbar, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';

interface Message {
  text: string;
  sender: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  const handleReceiveMessage = (text: string) => {
    setMessages([...messages, { text, sender: 'Other' }]);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Group Chat
            </Typography>
            <Button color="inherit" onClick={() => handleReceiveMessage('Hello!')}>
              Simulate Incoming
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ display: 'flex', flex: 1 }}>
          {drawerOpen && (
            <Drawer
              variant="persistent"
              anchor="left"
              open={drawerOpen}
              style={{ width: 250, flexShrink: 0 }}
              PaperProps={{ style: { width: 250, position: 'relative' } }}
            >
              <div style={{ width: 250 }}>
                <Toolbar>
                  <Typography variant="h6" noWrap>
                    People
                  </Typography>
                </Toolbar>
                <List>
                  <ListItem>
                    <ListItemText primary="You" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Other" />
                  </ListItem>
                  {/* Add more connected people here */}
                </List>
              </div>
            </Drawer>
          )}
          <Paper style={{ flex: 1, overflow: 'auto', padding: '1rem' }}>
            <List>
              {messages.map((msg, index) => (
                <ListItem
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Typography variant="caption" color="textSecondary" style={{ alignSelf: 'flex-start' }}>
                    {msg.sender}
                  </Typography>
                  <Paper
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: msg.sender === 'You' ? '#e1f5fe' : '#f1f1f1',
                      maxWidth: '70%',
                    }}
                  >
                    <ListItemText primary={msg.text} />
                  </Paper>
                </ListItem>
              ))}
            </List>
          </Paper>
        </div>
        <Grid container spacing={2} style={{ padding: '1rem' }}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              variant="outlined"
              label="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Chat;