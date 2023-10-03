"use client";
// Next / React
import React from "react";

// UI library
import {
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

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";

export default function ContactInformationPage() {
  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Contact Information
      </Typography>
      <Typography>Fill all details carefully!</Typography>
      <ContactInformationForm />
    </Box>
  );
}

// In-components

function ContactInformationForm() {
  return (
    <form>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={6}>
          <FormControl required>
            <FormLabel>Address</FormLabel>
            <Textarea required minRows={3} />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl>
            <FormLabel>Postal Address</FormLabel>
            <Input sx={{ pl: 1 }} size="lg" variant="outlined" type="tel" />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl required>
            <FormLabel>State</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="lagos">Lagos</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl required>
            <FormLabel>City</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="lekki">Lekki</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl required>
            <FormLabel>Phone number</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              value="08062820377"
              size="lg"
              variant="outlined"
              type="tel"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              value="your-email@gmail.com"
              size="lg"
              variant="outlined"
              type="email"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        href="application"
        sx={{ width: 190, py: "10px" }}
        endDecorator={<KeyboardArrowRight />}
        type="submit"
      >
        Save and Continue
      </Button>
    </form>
  );
}
