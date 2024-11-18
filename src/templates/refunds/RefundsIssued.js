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
import { BarChart } from "@mui/x-charts";

const RefundsIssued = () => {
  const refunds = [
    { id: 1, name: "John Doe", amount: 50, reason: "Damaged product" },
    { id: 2, name: "Jane Smith", amount: 30, reason: "Incorrect item" },
    { id: 3, name: "Michael Brown", amount: 20, reason: "Late delivery" },
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Refunds Issued
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Customer ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Refund Amount ($)
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Reason</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {refunds.map((refund) => (
              <TableRow key={refund.id}>
                <TableCell>{refund.id}</TableCell>
                <TableCell>{refund.name}</TableCell>
                <TableCell>{refund.amount}</TableCell>
                <TableCell>{refund.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Box>
        <Typography variant="h6" gutterBottom>
          Refund Amount Distribution
        </Typography>
        {/* <BarChart
          dataset={data}
          xAxis={[{ dataKey: "name", scaleType: "band" }]} // Set scaleType to 'band'
          yAxis={[{ dataKey: "value" }]}
          series={[{ type: "bar", dataKey: "value" }]}
        /> 
        ;
      </Box> */}
    </Box>
  );
};

export default RefundsIssued;
