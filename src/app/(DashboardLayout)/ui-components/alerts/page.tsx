'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Grid,
  Stack,
  TextField,
  MenuItem,
  Button,
  Paper,
  Container,
  Card,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';

const RequestForm: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [requests, setRequests] = useState<any[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRequest = { category, type, quantity, dueDate };
    setRequests([...requests, newRequest]);
    setCategory('');
    setType('');
    setQuantity('');
    setDueDate('');
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <BaseCard title="Request Form">
            <Paper style={{ padding: '16px' }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    select
                    label="Category"
                    value={category}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
                    fullWidth
                    required
                  >
                    <MenuItem value="Healthcare">Healthcare</MenuItem>
                    <MenuItem value="Water Supply">Water Supply</MenuItem>
                    <MenuItem value="Transportation">Transportation</MenuItem>
                  </TextField>

                  <TextField
                    label="Type"
                    value={type}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setType(e.target.value)}
                    fullWidth
                    required
                  />

                  <TextField
                    type="number"
                    label="Quantity"
                    value={quantity}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(e.target.value)}
                    fullWidth
                    required
                  />

                  <TextField
                    type="date"
                    label="Due Date"
                    value={dueDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDueDate(e.target.value)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />

                  <Button type="submit" variant="contained" color="primary">
                    Submit Request
                  </Button>
                </Stack>
              </form>
            </Paper>
          </BaseCard>
        </Grid>

        <Grid item xs={12} md={8}>
          {requests.length > 0 && (
            <BaseCard title="Submitted Requests">
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '0 0 0 4px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  Active Requests
                </Box>
                <Box display="flex" flexDirection="column" gap={2} mt={4}>
                  {requests.map((request, index) => (
                    <Card key={index}>
                      <CardContent>
                        <Typography variant="h6">Request {index + 1}</Typography>
                        <Typography><strong>Category:</strong> {request.category}</Typography>
                        <Typography><strong>Type:</strong> {request.type}</Typography>
                        <Typography><strong>Quantity:</strong> {request.quantity}</Typography>
                        <Typography><strong>Due Date:</strong> {request.dueDate}</Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            </BaseCard>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequestForm;
