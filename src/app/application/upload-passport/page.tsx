"use client";
// Next / React
import React from "react";

// UI library
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@mui/joy";

// Custom components
import PassportUpload from "@/components/PassportUpload";

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";
import WarningIcon from "@mui/icons-material/Warning";

export default function ContactInformationPage() {
  const [loading, setLoading] = React.useState(true);
  const [DropZone, setDropZone] = React.useState<React.JSX.Element>();

  React.useEffect(() => {
    setDropZone(<PassportUpload />);
    setLoading(false);
  }, []);

  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Upload Passport
      </Typography>
      {/* <Alert
        sx={{ alignItems: "flex-start" }}
        startDecorator={<WarningIcon />}
        variant="soft"
        color="warning"
      >
        <div>
          <div>Warning</div>
          <Typography level="body-sm" color="warning">
            The passport photograph must feature a plain background and should
            not exceed a file size of 512KB.
          </Typography>
        </div>
      </Alert> */}
      <br />
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Typography sx={{ pb: 2 }} level="body-sm">
            The passport photograph must feature a plain background and should
            not exceed a file size of 512KB.
          </Typography>
          {DropZone}
          <Box sx={{ pt: 4 }}>
            <Button sx={{ width: 200, py: "10px" }} type="submit">
              Upload and Continue
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
