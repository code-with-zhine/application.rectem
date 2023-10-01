"use client";
// Next / React
import React from "react";
import Link from "next/link";

// UI library
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Typography,
} from "@mui/joy";

// Custom components

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";

export default function EmailVerification() {
  return (
    <Grid xs={12} sx={{ p: 2 }}>
      <Typography sx={{ pb: 2 }} level="h4">
        Email Verification
      </Typography>
      <Typography>We have sent an email verification to your email</Typography>
      <Typography sx={{ py: 2 }}>
        Click on the verification link or enter the OTP sent to your email
        below. Once you've verified your email, you'll be one step closer to
        completing your application.
      </Typography>
      <FormControl sx={{ py: 2 }} required component="form">
        <FormLabel>OTP</FormLabel>
        <Input
          sx={{ pl: 1 }}
          required
          size="lg"
          variant="outlined"
          type="number"
          slotProps={{
            input: {
              minLength: 3,
            },
          }}
        />
        <FormHelperText>Enter the OTP sent</FormHelperText>
      </FormControl>
      <Button
        href="application"
        sx={{ width: 190 }}
        endDecorator={<KeyboardArrowRight />}
        type="submit"
      >
        Verify and Continue
      </Button>
      <Typography sx={{ pt: 1 }}>
        OTP not received? <Link href="">Resend</Link> or{" "}
        <Link href="">Change email</Link>
      </Typography>
    </Grid>
  );
}
