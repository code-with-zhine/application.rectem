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
  List,
  ListItem,
  ListItemDecorator,
  Option,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Typography,
} from "@mui/joy";

// Custom components

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";

export default function ContactInformationPage() {
  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

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
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Enter your address" minRows={3} />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl>
            <FormLabel>Postal Address</FormLabel>
            <Input
              sx={{ pl: 1 }}
              placeholder="Enter your postal address"
              size="lg"
              variant="outlined"
              type="tel"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl required>
            <FormLabel>State</FormLabel>
            <Select variant="outlined" placeholder="Choose one…" size="lg">
              <Option value="lagos">Lagos</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl required>
            <FormLabel>City</FormLabel>
            <Select variant="outlined" placeholder="Choose one…" size="lg">
              <Option value="lekki">Lekki</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl required disabled>
            <FormLabel>Email</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              placeholder="Enter your email address"
              size="lg"
              variant="outlined"
              type="email"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl required disabled>
            <FormLabel>Phone number</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              placeholder="Enter your maiden name"
              size="lg"
              variant="outlined"
              type="tel"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        href="application"
        sx={{ width: 190 }}
        endDecorator={<KeyboardArrowRight />}
        type="submit"
      >
        Save and Continue
      </Button>
    </form>
  );
}
