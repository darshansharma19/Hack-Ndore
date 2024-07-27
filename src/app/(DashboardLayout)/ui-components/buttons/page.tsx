"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  TablePagination,
} from "@mui/material";
import BaseCard from "@/app/(DashboardLayout)/components/shared/BaseCard";
import axios from "axios";

interface DataItem {
  [key: string]: any;
}

const fetchData = async () => {
  const response = await axios.get("https://waterapi-xdy7.onrender.com/fetch");
  return response.data;
};

const BasicRating: React.FC = () => {
  const [apiData, setApiData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<DataItem | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(6);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const data = await fetchData();
        setApiData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  const handleEdit = (item: DataItem) => {
    setCurrentItem(item);
    setEditDialogOpen(true);
  };

  const handleDelete = (index: number) => {
    setApiData(apiData.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (currentItem) {
      setApiData((prevData) =>
        prevData.map((item) =>
          item["Item ID"] === currentItem["Item ID"] ? currentItem : item
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

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching data: {error}</Typography>;

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Two cards in the first row */}
        <Grid item xs={12} container spacing={3}>
          <Grid item xs={12} md={6}>
            <BaseCard>
              <iframe
                src="http://192.168.137.203:5000/plot/items_by_status"
                width="100%"
                height="400"
                style={{ border: "none" }}
                title="Items by Status"
              ></iframe>
            </BaseCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <BaseCard>
              <iframe
                src="http://192.168.137.203:5000/plot/quantity_by_category"
                width="100%"
                height="400"
                style={{ border: "none" }}
                title="Quantity by Category"
              ></iframe>
            </BaseCard>
          </Grid>
        </Grid>

        {/* Single centered card */}
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <BaseCard>
              <iframe
                src="http://192.168.137.203:5000/plot/quantity_by_location"
                width="100%"
                height="400"
                style={{ border: "none" }}
                title="Quantity by Location"
              ></iframe>
            </BaseCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BaseCard title="Water Supply Data">
          <Box sx={{ mt: 2, maxHeight: "400px", overflow: "auto" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {apiData.length > 0 &&
                      Object.keys(apiData[0]).map((key) => (
                        <TableCell key={key}>{key}</TableCell>
                      ))}
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {apiData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
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
              rowsPerPageOptions={[6, 10, 25]}
              component="div"
              count={apiData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
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
    </Box>
  );
};

export default BasicRating;
