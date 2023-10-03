"use client";
// Next / React
import React from "react";

// UI library
import { Alert, Box, Typography } from "@mui/joy";

// Custom components
import AdvancedDropzoneDemo from "@/components/FileUpload";

// Icons
import WarningIcon from "@mui/icons-material/Warning";

export default function ContactInformationPage() {
  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Upload Certificate(s)
      </Typography>
      <Alert
        sx={{ alignItems: "flex-start" }}
        startDecorator={<WarningIcon />}
        variant="soft"
        color="warning"
      >
        <div>
          <div>Warning</div>
          <Typography level="body-sm" color="warning">
            Upload O'LEVEL at not more than 2 sitting and UTME result in PDF,
            JPG, JPEG, PNG format only.
          </Typography>
        </div>
      </Alert>

      <br />
      <AdvancedDropzoneDemo />
    </Box>
  );
}
