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
  Modal,
  ModalClose,
  Option,
  Radio,
  RadioGroup,
  Select,
  Sheet,
  Textarea,
  Typography,
} from "@mui/joy";

// Custom components

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";

export default function CourseOfStudyPage() {
  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Proposed Course Of Study
      </Typography>
      <Typography>Fill all details carefully!</Typography>
      <CourseOfStudyForm />
    </Box>
  );
}

// In-components

function CourseOfStudyForm() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <form>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>School</FormLabel>
            <Select sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="lagos">Lagos</Option>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={8}>
          <FormControl required>
            <FormLabel>Course</FormLabel>
            <Select sx={{ pl: 1 }} variant="outlined" size="lg">
              <Option value="lekki">Lekki</Option>
            </Select>
            <FormHelperText>
              <a
                style={{
                  cursor: "pointer",
                  paddingLeft: 5,
                  color: "lightcoral",
                }}
                onClick={() => setOpen(true)}
              >
                Computer Science requirements
              </a>
            </FormHelperText>
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

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="plain"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            This is the modal title
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog
            with an optional <code>aria-describedby</code> attribute.
          </Typography>
        </Sheet>
      </Modal>
    </form>
  );
}
