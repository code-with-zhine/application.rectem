"use client";
// Next / React
import React from "react";

// UI library
import {
  Box,
  Button,
  Checkbox,
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

export default function RefereeInformationPage() {
  const [selectedValue, setSelectedValue] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.checked);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 700 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Referee Information
      </Typography>
      <Typography>Fill all details carefully!</Typography>
      <Checkbox
        sx={{ py: 2 }}
        label="Were you recommended by someone?"
        defaultChecked
        onChange={handleChange}
      />
      {selectedValue ? (
        <RefereeInformationForm />
      ) : (
        <OthersRefereeInformationForm />
      )}
    </Box>
  );
}

// In-components

function RefereeInformationForm() {
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
          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input sx={{ pl: 1 }} size="lg" variant="outlined" type="tel" />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input sx={{ pl: 1 }} size="lg" variant="outlined" type="email" />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Referred by</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="mr">Staff</Option>
              <Option value="miss">Student</Option>
              <Option value="mrs">Others</Option>
            </Select>
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

function OthersRefereeInformationForm() {
  return (
    <form>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>I learnt about RECTEM on</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="mr">Facebook</Option>
              <Option value="miss">Twitter</Option>
              <Option value="mrs">Instagram</Option>
              <Option value="pastor">Linkdln</Option>
              <Option value="eng">Others</Option>
            </Select>
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
