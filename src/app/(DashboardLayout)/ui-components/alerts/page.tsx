'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Grid,
  Stack,
  TextField,
  MenuItem,
  Button,
  Paper,
  Container
} from '@mui/material';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';

const RequestForm: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ category, type, quantity, dueDate });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
      </Grid>
    </Container>
  );
};

export default RequestForm;
