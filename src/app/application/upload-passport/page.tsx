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
  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

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
      <Typography level="body-sm">
        The passport photograph must feature a plain background and should not
        exceed a file size of 512KB.
      </Typography>
      <br />
      <PassportUpload />
      <Box sx={{ pt: 4 }}>
        <Button sx={{ width: 200, py: "10px" }} type="submit">
          Upload and Continue
        </Button>
      </Box>
    </Box>
  );
}
