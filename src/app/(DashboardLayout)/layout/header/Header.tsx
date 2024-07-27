import React, { useState } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, TextField, Button, CircularProgress, Typography, Container, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { IconMenu2, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import Profile from './Profile';
import TranslateIcon from '@mui/icons-material/Translate'; // Import the language translation icon

interface HeaderProps {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: HeaderProps) => {
  const [question, setQuestion] = useState<string>('');
  const [tankCount, setTankCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://3717-115-245-99-238.ngrok-free.app/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setTankCount(data.response);
    } catch (error) {
      setError('Error fetching tank count');
      console.error('Error fetching tank count:', error);
    } finally {
      setLoading(false);
    }
  };

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    minHeight: isCollapsed ? '50px' : '70px',
    transition: 'min-height 0.3s ease',
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
  }));

  return (
    <>
      <AppBarStyled position="sticky" color="default">
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
              display: {
                lg: 'none',
                xs: 'inline',
              },
            }}
          >
            <IconMenu2 width="20" height="20" />
          </IconButton>
          <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
            <Typography
              variant="h2"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#FFA500', // Orange color for text
              }}
            >
              Inventory Management System for IMC
            </Typography>
          </Box>
          <Stack spacing={1} direction="row" alignItems="center">
            <IconButton color="inherit" aria-label="language-translate">
              <TranslateIcon />
            </IconButton>
            <Profile />
            <Tooltip title="Quick Search" arrow>
              <IconButton
                color="inherit"
                aria-label="toggle-header"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? <IconChevronDown width="20" height="20" /> : <IconChevronUp width="20" height="20" />}
              </IconButton>
            </Tooltip>
          </Stack>
        </ToolbarStyled>
      </AppBarStyled>
      {!isCollapsed && (
        <Container>
          <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
              <TextField
                label="Question"
                variant="outlined"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <Button variant="contained" color="primary" type="submit" disabled={loading}>
                Submit
              </Button>
            </form>
            {loading && <CircularProgress style={{ marginTop: '20px' }} />}
            {error && <Typography color="error" style={{ marginTop: '20px' }}>{error}</Typography>}
            {tankCount !== null && !loading && !error && (
              <Typography variant="h6" style={{ marginTop: '20px' }}>
              {tankCount}
              </Typography>
            )}
          </Box>
        </Container>
      )}
    </>
  );
};

Header.propTypes = {
  toggleMobileSidebar: PropTypes.func.isRequired,
};

export default Header;
