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
  Typography,
} from "@mui/joy";

// Custom components

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";

export default function PersonalDetails() {
  return (
    <Box sx={{ p: 2, maxWidth: 700 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Personal Details
      </Typography>
      <Typography>Fill all details carefully!</Typography>
      <PersonalDetailsForm />
    </Box>
  );
}

// In-components

function PersonalDetailsForm() {
  return (
    <form>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Title</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="mr">Mr.</Option>
              <Option value="miss">Miss.</Option>
              <Option value="mrs">Mrs.</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Last Name</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
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
            <FormLabel>First Name</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              size="lg"
              variant="outlined"
              type="email"
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
            <FormLabel>Middle Name</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              size="lg"
              variant="outlined"
              type="tel"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Marital Status</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="single">Single</Option>
              <Option value="engaged">Engaged</Option>
              <Option value="married">Married</Option>
              <Option value="divorced">Divorced</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Maiden Name</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              size="lg"
              variant="outlined"
              type="tel"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Gender</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="M">Male</Option>
              <Option value="F">Female</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Religion</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="christian">Christianity</Option>
              <Option value="islam">Islam</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Date Of Birth</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              size="lg"
              variant="outlined"
              type="date"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Nationality</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="nigeria">Nigeria</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>State Of Origin</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="lagos">Lagos</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Local Government</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="eti-osa">Eti-Osa</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Disability</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="N">None</Option>
              <Option value="Y">Yes</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>Your Disability</FormLabel>
            <Input
              sx={{ pl: 1 }}
              required
              size="lg"
              variant="outlined"
              type="text"
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Button sx={{ width: 190, py: "10px" }} type="submit">
        Save and Continue
      </Button>
    </form>
  );
}
