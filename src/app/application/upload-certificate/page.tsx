"use client";
// Next / React
import React, { Suspense, useEffect } from "react";

// UI library
import { Alert, Box, Typography } from "@mui/joy";

// Custom components
import AdvancedDropzoneDemo from "@/components/FileUpload";

// Icons
import WarningIcon from "@mui/icons-material/Warning";

export default function ContactInformationPage() {
  const [loading, setLoading] = React.useState(true);
  const [DropZone, setDropZone] = React.useState<React.JSX.Element>();

  React.useEffect(() => {
    setDropZone(<AdvancedDropzoneDemo />);
    setLoading(false);
  }, []);

  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Typography level="h4">Upload Certificate(s)</Typography>
      {/* <Alert
        sx={{ alignItems: "flex-start" }}
        startDecorator={<WarningIcon />}
        variant="soft"
        color="warning"
      >
        <div>
          <div>Warning</div>
          <Typography level="body-sm" color="warning">
            Submit your O'LEVEL results in a maximum of two sittings and your
            UTME results in either PDF, JPG, JPEG, or PNG format.
          </Typography>
        </div>
      </Alert> */}

      <br />
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Typography sx={{ pb: 2 }} level="body-sm">
            Upload your O'LEVEL results in a maximum of two sittings and your
            UTME results in either PDF, JPG, JPEG, or PNG format.
          </Typography>
          {DropZone}
        </>
      )}
    </Box>
  );
}
