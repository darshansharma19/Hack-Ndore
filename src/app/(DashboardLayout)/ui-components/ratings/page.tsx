'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, TablePagination } from '@mui/material';
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = apiData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const TableComponent = React.useMemo(() => {
    if (loading) {
      return <Typography>Loading...</Typography>;
    }

    if (error) {
      return <Typography>Error fetching data: {error}</Typography>;
    }

    if (apiData.length > 0) {
      return (
        <>
          <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {Object.keys(apiData[0]).map((key) => (
                    <TableCell key={key}>{key}</TableCell>
                  ))}
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
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
          <TablePagination
            rowsPerPageOptions={[6, 12, 24]}
            component="div"
            count={apiData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      );
    }

    return null;
  }, [loading, error, apiData, paginatedData, rowsPerPage, page]);

  return (
    <Grid container spacing={3}>

<Grid item xs={12} container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <BaseCard>
            <iframe
              src="\plots\equipment_expiry_overview.html"
              width="100%"
              height="400"
              style={{ border: 'none' }}
              title="Items by Status"
            ></iframe>
          </BaseCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <BaseCard>
            <iframe
              src="\plots\top_10_items_by_quantity.html"
              width="100%"
              height="400"
              style={{ border: 'none' }}
              title="Quantity by Category"
            ></iframe>
          </BaseCard>
        </Grid>
      </Grid>

      {/* Section for the table */}
      <Grid item xs={12} lg={12}>
        <BaseCard title="Transportation Data">
          <Box sx={{ mt: 2 }}>
            {TableComponent}
          </Box>
        </BaseCard>
      </Grid>

      {/* Section for the iframes */}
      
      {/* Edit Dialog */}
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
