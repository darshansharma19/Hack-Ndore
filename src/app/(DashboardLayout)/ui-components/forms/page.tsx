'use client';

import React, { useEffect, useState } from 'react';
import {
  Paper,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Forms = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://healthapi-a6nc.onrender.com/fetch')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Data Table">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Expiry Date/Last Maintenance</TableCell>
                  <TableCell>Item ID</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Manufacturing Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Notes</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row['Item ID']}>
                    <TableCell>{row["Category"]}</TableCell>
                    <TableCell>{row['Expiry Date/Last Maintenance']}</TableCell>
                    <TableCell>{row['Item ID']}</TableCell>
                    <TableCell>{row['Location']}</TableCell>
                    <TableCell>{row['Manufacturing Date']}</TableCell>
                    <TableCell>{row['Name']}</TableCell>
                    <TableCell>{row['Notes']}</TableCell>
                    <TableCell>{row['Quantity']}</TableCell>
                    <TableCell>{row['Status']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Forms;
