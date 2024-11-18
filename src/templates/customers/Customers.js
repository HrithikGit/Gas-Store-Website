import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "555-789-1234",
    },
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Customer Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Customer ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customers;
