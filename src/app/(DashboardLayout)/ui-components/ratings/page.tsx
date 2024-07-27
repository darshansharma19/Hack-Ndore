'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import axios from 'axios';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [apiData, setApiData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://transportapi-182t.onrender.com/fetch');
        setApiData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="API Data">
          <Box sx={{ mt: 2 }}>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography>Error fetching data: {error}</Typography>}
            {apiData.length > 0 && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {Object.keys(apiData[0]).map((key) => (
                        <TableCell key={key}>{key}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {apiData.map((row, index) => (
                      <TableRow key={index}>
                        {Object.values(row).map((value, idx) => (
                          <TableCell key={idx}>{String(value)}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </BaseCard>
      </Grid>
    </Grid>
  );
}
