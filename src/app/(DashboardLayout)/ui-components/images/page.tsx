'use client';
import React, { useState, useEffect } from 'react';
import { AppBar, Drawer, List, ListItem, ListItemText, Paper, TextField, Toolbar, Typography, Box, Grid, IconButton, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface Message {
  text: string;
  sender: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({
    'John Smith': [
      { text: 'Hey, how are you?', sender: 'John Smith' },
      { text: 'I am good, thanks!', sender: 'me' }
    ],
    'Allison Grayce': [
      { text: 'Can we meet tomorrow?', sender: 'Allison Grayce' },
      { text: 'Sure, what time?', sender: 'me' }
    ],
    'Mike Jones': [
      { text: 'Hey, I\'m back in town...you wanna meet-up for coffee?', sender: 'me' },
      { text: 'Yeah that sounds great! Have a new project to run by you.', sender: 'Mike Jones' },
      { text: 'Awesome, let\'s meet at the coffee shop on South Broadway. What time works best for you?', sender: 'me' },
      { text: 'Have a meeting today, but I\'ll be free around 4pm.', sender: 'Mike Jones' },
      { text: 'Perfect, see ya then.', sender: 'me' }
    ]
  });
  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState('Mike Jones');

  useEffect(() => {
    
    document.body.style.overflow = 'hidden';
    
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages({
        ...messages,
        [selectedUser]: [...messages[selectedUser], { text: newMessage, sender: 'me' }]
      });
      setNewMessage('');
    }
  };

  const handleUserSelect = (user: string) => {
    setSelectedUser(user);
  };

  return (
    <Box display="flex" height="90vh" overflow="hidden">
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: '240px', flexShrink: 0, '& .MuiDrawer-paper': { width: '240px', boxSizing: 'border-box' } }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {Object.keys(messages).map((user, index) => (
              <ListItem button key={index} onClick={() => handleUserSelect(user)}>
                <ListItemText primary={user} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box flexGrow={1} display="flex" flexDirection="column" height="100vh">
        <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {selectedUser}
            </Typography>
            <Avatar src="/path/to/avatar.jpg" alt="User Avatar" />
          </Toolbar>
        </AppBar>
        <Box flexGrow={1} p={2} component={Paper} display="flex" flexDirection="column" overflow="hidden">
          <Grid container direction="column" spacing={2} sx={{ flexGrow: 1, overflow: 'auto' }}>
            {messages[selectedUser]?.map((message, index) => (
              <Grid item key={index} alignSelf={message.sender === 'me' ? 'flex-end' : 'flex-start'}>
                <Paper style={{ padding: '10px', backgroundColor: message.sender === 'me' ? '#e0f7fa' : '#f0f0f0', maxWidth: '100%' }}>
                  <Typography>{message.text}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box p={2} display="flex" alignItems="center" component={Paper} sx={{ position: 'sticky', bottom: 0 }}>
          <TextField
            fullWidth
            variant="outlined"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            sx={{ mr: 2 }}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{ width: '240px', flexShrink: 0, '& .MuiDrawer-paper': { width: '240px', boxSizing: 'border-box' } }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {Object.keys(messages).map((user, index) => (
              <ListItem button key={index} onClick={() => handleUserSelect(user)}>
                <ListItemText primary={user} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Chat;