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
  Radio,
  RadioGroup,
  Typography,
} from "@mui/joy";

// Custom components

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";

export default function ApplicationPage() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 700 }}>
      <Typography sx={{ pb: 2 }} level="h4">{`Get started`}</Typography>
      <Typography>Are you a returning student?</Typography>
      <CustomizedRadio handleChange={handleChange} />
      <GetStarted selectedValue={selectedValue} />
    </Box>
  );
}

// In-components

function GetStarted({ selectedValue }: { selectedValue: String }) {
  if (selectedValue === "1") {
    return (
      <Button size="md" sx={{ width: 200, py: "10px" }}>
        Go To Student Portal
      </Button>
    );
  }

  if (selectedValue === "2") {
    return <NewRegistrationForm />;
  }

  if (selectedValue === "3") {
    return <ContinueRegistrationForm />;
  }
}

function CustomizedRadio({
  handleChange,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <RadioGroup aria-label="Your plan" name="people">
      <List
        sx={{
          minWidth: 240,
          "--List-gap": "0.5rem",
          "--ListItem-paddingY": "1rem",
          "--ListItem-radius": "8px",
          "--ListItemDecorator-size": "32px",
          py: 2,
          px: 0,
        }}
      >
        {[
          {
            value: 1,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 13q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13Zm0 9q-3.65-.925-5.825-4T4 11.1V5l8-3l8 3v6.1q0 3.825-2.175 6.9T12 22Zm0-2.1q1.475-.475 2.613-1.488t1.987-2.287q-1.075-.55-2.238-.838T12 15q-1.2 0-2.363.288t-2.237.837q.85 1.275 1.988 2.288T12 19.9Z"
                />
              </svg>
            ),
            heading: "Yes, I am a returning student",
            content: "You should login to the student portal instead",
          },
          {
            value: 2,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V11.1l-8 7.975V22H6Zm8.5 0q-.2 0-.35-.15T14 21.5v-1.2q0-.2.088-.4t.212-.325l4.85-4.875l2.15 2.1l-4.875 4.9q-.125.15-.325.225t-.4.075h-1.2Zm7.525-5.9L19.9 13.975l.7-.7q.3-.3.725-.3t.7.3l.7.725q.275.3.275.713t-.275.687l-.7.7ZM14 9h4l-5-5v4q0 .425.288.713T14 9Z"
                />
              </svg>
            ),
            heading: "No, I wish to start a new registration",
            content: "Click the start button below to start a new registration",
          },
          {
            value: 3,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 16q1.875 0 3.188-1.313T16.5 11.5q0-1.875-1.313-3.188T12 7v1.5q1.25 0 2.125.875T15 11.5q0 1.25-.875 2.125T12 14.5q-.825 0-1.538-.425t-1.112-1.15l-1.3.725q.6 1.1 1.65 1.725T12 16Zm-3.75-3.65q.325 0 .537-.212T9 11.6q0-.325-.213-.537t-.537-.213q-.325 0-.537.213T7.5 11.6q0 .325.213.538t.537.212Zm.55-2.1q.325 0 .537-.212T9.55 9.5q0-.325-.213-.537T8.8 8.75q-.325 0-.537.213T8.05 9.5q0 .325.213.537t.537.213Zm1.45-1.375q.325 0 .537-.212T11 8.125q0-.325-.213-.537t-.537-.213q-.325 0-.537.213t-.213.537q0 .325.213.537t.537.213ZM12 21.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9Zm0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"
                />
              </svg>
            ),
            heading: "No, but i wish to resume an ongoing registration",
            content:
              "Verify your email and phone number we will redirect you to your ongoing registration",
          },
        ].map((item, index) => (
          <ListItem
            variant="outlined"
            key={index}
            sx={{
              boxShadow: "sm",
              placeItems: "center",
              "& span": {
                placeItems: "center",
              },
            }}
          >
            <Radio
              overlay
              value={item.value}
              onChange={handleChange}
              label={
                <Box display="flex">
                  <ListItemDecorator>{item.icon}</ListItemDecorator>
                  <Box sx={{ px: 1 }} display="flex" flexDirection="column">
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.heading}
                    </Typography>
                    <Typography sx={{ color: "gray" }}>
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              }
              sx={{ flexGrow: 1 }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -1,
                      border: "2px solid",
                      borderColor: theme.vars.palette.primary[500],
                    }),
                  }),
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </RadioGroup>
  );
}

function NewRegistrationForm() {
  return (
    <form>
      <Typography>Begin application process</Typography>

      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={4}>
          <FormControl required component="form">
            <FormLabel>Surname</FormLabel>
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
          <FormControl required component="form">
            <FormLabel>First Name</FormLabel>
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
          <FormControl required component="form">
            <FormLabel>Other Name</FormLabel>
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
          <FormControl required component="form">
            <FormLabel>Email Address</FormLabel>
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
          <FormControl required component="form">
            <FormLabel>Mobile Phone Number</FormLabel>
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
      </Grid>
      <Button sx={{ width: 100, py: "10px" }} type="submit">
        Continue
      </Button>
    </form>
  );
}

function ContinueRegistrationForm() {
  return (
    <form>
      <Typography>Continue application process</Typography>

      <Grid container spacing={2} sx={{ flexGrow: 1, py: 2 }}>
        <Grid xs={12} sm={4}>
          <FormControl required component="form">
            <FormLabel>Email Address</FormLabel>
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
          <FormControl required component="form">
            <FormLabel>Mobile Phone Number</FormLabel>
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
      </Grid>
      <Button sx={{ width: 190, py: "10px" }} type="submit">
        Verify and Resume
      </Button>
    </form>
  );
}
