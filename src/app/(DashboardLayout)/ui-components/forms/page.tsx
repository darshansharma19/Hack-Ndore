'use client';

import React, { useEffect, useState } from 'react';
import {
  Paper,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';

interface DataItem {
  Category: string;
  'Expiry Date/Last Maintenance': string;
  'Item ID': string;
  Location: string;
  'Manufacturing Date': string;
  Name: string;
  Notes: string;
  Quantity: string;
  Status: string;
}

const Forms = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<DataItem | null>(null);

  useEffect(() => {
    fetch('https://healthapi-a6nc.onrender.com/fetch')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (item: DataItem) => {
    setCurrentItem(item);
    setEditDialogOpen(true);
  };

  const handleDelete = (itemId: string) => {
    setData(data.filter((item) => item['Item ID'] !== itemId));
  };

  const handleSave = () => {
    if (currentItem) {
      setData((prevData) =>
        prevData.map((item) =>
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

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="HealthCare Data">
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
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row['Item ID']}>
                    <TableCell>{row['Category']}</TableCell>
                    <TableCell>{row['Expiry Date/Last Maintenance']}</TableCell>
                    <TableCell>{row['Item ID']}</TableCell>
                    <TableCell>{row['Location']}</TableCell>
                    <TableCell>{row['Manufacturing Date']}</TableCell>
                    <TableCell>{row['Name']}</TableCell>
                    <TableCell>{row['Notes']}</TableCell>
                    <TableCell>{row['Quantity']}</TableCell>
                    <TableCell>{row['Status']}</TableCell>
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
                        onClick={() => handleDelete(row['Item ID'])}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </BaseCard>
      </Grid>

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          {currentItem && (
            <>
              <TextField
                margin="dense"
                label="Category"
                name="Category"
                value={currentItem.Category}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Expiry Date/Last Maintenance"
                name="Expiry Date/Last Maintenance"
                value={currentItem['Expiry Date/Last Maintenance']}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Item ID"
                name="Item ID"
                value={currentItem['Item ID']}
                onChange={handleChange}
                fullWidth
                disabled
              />
              <TextField
                margin="dense"
                label="Location"
                name="Location"
                value={currentItem.Location}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Manufacturing Date"
                name="Manufacturing Date"
                value={currentItem['Manufacturing Date']}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Name"
                name="Name"
                value={currentItem.Name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Notes"
                name="Notes"
                value={currentItem.Notes}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Quantity"
                name="Quantity"
                value={currentItem.Quantity}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Status"
                name="Status"
                value={currentItem.Status}
                onChange={handleChange}
                fullWidth
              />
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
};

export default Forms;
