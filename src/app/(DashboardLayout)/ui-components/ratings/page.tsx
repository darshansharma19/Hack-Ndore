'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://transportapi-182t.onrender.com/fetch');
  return response.data;
};

const BasicRating = () => {
  const [apiData, setApiData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [editDialogOpen, setEditDialogOpen] = React.useState<boolean>(false);
  const [currentItem, setCurrentItem] = React.useState<any | null>(null);

  React.useEffect(() => {
    const fetchApiData = async () => {
      try {
        const data = await fetchData();
        setApiData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  const handleEdit = (item: any) => {
    setCurrentItem(item);
    setEditDialogOpen(true);
  };

  const handleDelete = (index: number) => {
    setApiData(apiData.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (currentItem) {
      setApiData(prevData =>
        prevData.map(item =>
          item['Item ID'] === currentItem['Item ID'] ? currentItem : item
        )
      );
      setEditDialogOpen(false);
      setCurrentItem(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentItem) {
      setCurrentItem({
        ...currentItem,
        [e.target.name]: e.target.value,
      });
    }
  };

  const TableComponent = React.useMemo(() => {
    if (loading) {
      return <Typography>Loading...</Typography>;
    }

    if (error) {
      return <Typography>Error fetching data: {error}</Typography>;
    }

    if (apiData.length > 0) {
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.keys(apiData[0]).map((key) => (
                  <TableCell key={key}>{key}</TableCell>
                ))}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((value, idx) => (
                    <TableCell key={idx}>{String(value)}</TableCell>
                  ))}
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(row)}
                      style={{ marginRight: 8 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

    return null;
  }, [loading, error, apiData]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Transportation Data">
          <Box sx={{ mt: 2 }}>
            {TableComponent}
          </Box>
        </BaseCard>
      </Grid>

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          {currentItem && (
            <>
              {Object.keys(currentItem).map((key) => (
                <TextField
                  key={key}
                  margin="dense"
                  label={key}
                  name={key}
                  value={currentItem[key]}
                  onChange={handleChange}
                  fullWidth
                />
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default BasicRating;
