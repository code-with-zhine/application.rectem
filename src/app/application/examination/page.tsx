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
  Stack,
  Textarea,
  Typography,
  Table,
  Divider,
} from "@mui/joy";
import Checkbox, { checkboxClasses } from "@mui/joy/Checkbox";

// Custom components

// Icons
import { Add, DocumentScanner, KeyboardArrowRight } from "@mui/icons-material";

export default function ContactInformationPage() {
  const [selectedValue, setSelectedValue] = React.useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.checked);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Examination(s)
      </Typography>
      <Typography>Fill all details carefully!</Typography>
      <Checkbox
        sx={{ pt: 2 }}
        label="Are you using 2 sitting? (O'LEVEL)"
        defaultChecked
        onChange={handleChange}
      />
      <AddOlevelForm />
      <Stack direction="row" justifyContent="space-between">
        {selectedValue ? (
          <>
            <Button sx={{ width: 100, py: "10px" }} type="submit">
              Save
            </Button>
            <Button disabled sx={{ width: 110, py: "10px" }} type="submit">
              Continue
            </Button>
          </>
        ) : (
          <Button sx={{ width: 190, py: "10px" }} type="submit">
            Save and Continue
          </Button>
        )}
      </Stack>
      {/* <AddUtmeForm /> */}
      {/* <Button
        href="application"
        sx={{ width: 190, py: "10px" }}
        endDecorator={<KeyboardArrowRight />}
        type="submit"
      >
        Save and Continue
      </Button> */}
    </Box>
  );
}

// In-components

function AddOlevelForm() {
  return (
    <form style={{ paddingBottom: 20 }}>
      <Typography fontWeight={500} sx={{ pt: 2 }}>
        O'LEVEL
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Examination</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="WAEC">WAEC</Option>
              <Option value="NECO">NECO</Option>
              <Option value="NABTEB">NABTEB</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Examination Period</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="JAN/FEB">JAN/FEB</Option>
              <Option value="MAY/JUNE">MAY/JUNE</Option>
              <Option value="JUNE/JULY">JUNE/JULY</Option>
              <Option value="NOV/DEC">NOV/DEC</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Examination Year</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="2023">2023</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Examination Number</FormLabel>
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
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>Examination School</FormLabel>
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
        <Grid xs={12}>
          <TableColumnWidth />
        </Grid>
        <Grid xs={7}>
          <Select
            required
            sx={{ pl: 1 }}
            variant="outlined"
            size="lg"
            defaultValue="Mathematics"
          >
            <Option value="Mathematics">General Mathematics</Option>
            <Option value="NECO">English Language</Option>
          </Select>
        </Grid>
        <Grid xs={3}>
          <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
            <Option value="A1">A1</Option>
          </Select>
        </Grid>
        <Grid xs={2} alignSelf="center">
          <Button
            variant="soft"
            color="success"
            fullWidth
            href="application"
            sx={{ py: "10px" }}
            type="submit"
          >
            <Add />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

function AddUtmeForm() {
  return (
    <form>
      <Typography fontWeight={500} sx={{ pt: 2 }}>
        UTME(JAMB)
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Examination</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="WAEC">UTME</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        {/* <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Examination Period</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="JAN/FEB">JAN/FEB</Option>
              <Option value="MAY/JUNE">MAY/JUNE</Option>
              <Option value="JUNE/JULY">JUNE/JULY</Option>
              <Option value="NOV/DEC">NOV/DEC</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid> */}
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>Examination Year</FormLabel>
            <Select required sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="2023">2023</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <FormControl required>
            <FormLabel>Examination Number</FormLabel>
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
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>Examination Center</FormLabel>
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
        <Grid xs={12}>
          <TableColumnWidth />
        </Grid>
        <Grid xs={7}>
          <Select
            required
            sx={{ pl: 1 }}
            variant="outlined"
            size="lg"
            defaultValue="Mathematics"
          >
            <Option value="Mathematics">General Mathematics</Option>
            <Option value="NECO">English Language</Option>
          </Select>
        </Grid>
        <Grid xs={3}>
          <Input
            sx={{ pl: 1 }}
            required
            size="lg"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid xs={2} alignSelf="center">
          <Button
            variant="soft"
            color="success"
            fullWidth
            href="application"
            sx={{ py: "10px" }}
            type="submit"
          >
            <Add />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

function TableColumnWidth() {
  return (
    <Table aria-label="striped table" stripe="odd">
      <thead>
        <tr>
          <th style={{ width: "80%" }}>Subjects</th>
          <th style={{ textAlign: "center" }}>Grades</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>General Mathematics</td>
          <td style={{ textAlign: "center" }}>A1</td>
        </tr>
      </tbody>
    </Table>
  );
}
