// EventInfoCard.js
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function EventInfoCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Icon className="h-8 w-8 text-blue-600 mr-4" />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
