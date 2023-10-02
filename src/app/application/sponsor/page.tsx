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

export default function NextOfKinPage() {
  return (
    <Box sx={{ p: 2, maxWidth: 700 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Sponsor Information
      </Typography>
      <Typography>Fill all details carefully!</Typography>
      <NextOfKinForm />
    </Box>
  );
}

// In-components

function NextOfKinForm() {
  return (
    <form>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Title</FormLabel>
            <Select
              required
              sx={{ pl: 1 }}
              variant="outlined"
              placeholder="Choose one…"
              size="lg"
            >
              <Option value="mr">Mr.</Option>
              <Option value="miss">Miss.</Option>
              <Option value="mrs">Mrs.</Option>
              <Option value="mr/mrs">Mr/Mrs.</Option>
              <Option value="pastor">Pst.</Option>
              <Option value="eng">Eng.</Option>
              <Option value="dr">Dr.</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>Full Name</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              placeholder="Enter full name"
              size="lg"
              variant="outlined"
              type="text"
              slotProps={{
                input: {
                  minLength: 3,
                },
              }}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Relationship</FormLabel>
            <Select
              required
              sx={{ pl: 1 }}
              variant="outlined"
              placeholder="Choose one…"
              size="lg"
            >
              <Option value="single">Mother</Option>
              <Option value="engaged">Father</Option>
              <Option value="married">Parent</Option>
              <Option value="brother">Brother</Option>
              <Option value="sister">Sister</Option>
              <Option value="uncle">Uncle</Option>
              <Option value="aunty">Aunty</Option>
              <Option value="others">Others</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Phone number</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              placeholder="Enter phone number"
              size="lg"
              variant="outlined"
              type="tel"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              sx={{ pl: 1 }}
              placeholder="Enter email"
              size="lg"
              variant="outlined"
              type="email"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Occupation</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              placeholder="Enter occupation"
              size="lg"
              variant="outlined"
              type="text"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Address</FormLabel>
            <Textarea required placeholder="Enter address" minRows={3} />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Nationality</FormLabel>
            <Select
              required
              sx={{ pl: 1 }}
              variant="outlined"
              placeholder="Choose one…"
              size="lg"
            >
              <Option value="nigeria">Nigeria</Option>
              <Option value="others">Others</Option>
            </Select>
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
