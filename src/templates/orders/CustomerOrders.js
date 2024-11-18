import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const orders = [
  {
    id: 1,
    customer: "John Doe",
    orderNumber: "ORD12345",
    date: "2024-11-15",
    items: [
      { name: "Product A", quantity: 2, price: 50 },
      { name: "Product B", quantity: 1, price: 100 },
    ],
    totalCost: 200,
  },
  {
    id: 2,
    customer: "Jane Smith",
    orderNumber: "ORD67890",
    date: "2024-11-16",
    items: [
      { name: "Product C", quantity: 3, price: 30 },
      { name: "Product D", quantity: 2, price: 70 },
    ],
    totalCost: 260,
  },
];

const CustomerOrders = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Order List
      </Typography>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Order Number</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Order Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total Items</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  {order.items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                  items
                </TableCell>
                <TableCell>${order.totalCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerOrders;
