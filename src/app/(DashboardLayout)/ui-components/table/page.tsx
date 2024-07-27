'use client';
import { Grid, Paper, Typography } from "@mui/material";
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Define a light color theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#dc004e', // Pink color
    },
    background: {
      default: '#f4f6f8', // Light gray background
    },
    text: {
      primary: '#333', // Dark gray text
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  height: 60,
  lineHeight: '60px',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
}));

// Define an interface for the data
interface UserData {
  id: number;
  role: 'admin' | 'user';
  name: string;
}

// Sample data structure
const data: UserData[] = [
  { id: 1, role: 'admin', name: 'Admin User A' },
  { id: 2, role: 'user', name: 'User B' },
  { id: 3, role: 'admin', name: 'Admin User C' },
  { id: 4, role: 'user', name: 'User D' }
];

// Sort function to prioritize admins
const sortData = (data: UserData[]): UserData[] => {
  return data.sort((a, b) => {
    if (a.role === 'admin' && b.role !== 'admin') return -1;
    if (a.role !== 'admin' && b.role === 'admin') return 1;
    return 0;
  });
};

const Tables = () => {
  const sortedData = sortData(data);

  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <BaseCard>
            <>
              <Typography variant="h6" color="primary">Admins and Users</Typography>
              {sortedData.map((item) => (
                <Item key={item.id}>
                  {item.name}
                </Item>
              ))}
            </>
          </BaseCard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Tables;
