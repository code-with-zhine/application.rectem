"use client";
// Next / React
import React from "react";
import Link from "next/link";
import Image from "next/image";

// UI library
import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Typography,
} from "@mui/joy";

// Custom components
import ColorSchemeToggle from "@/components/ThemeRegistry/ColorSchemeToggle";

// Icons
import { KeyboardArrowRight } from "@mui/icons-material";

export default function EmailVerification() {
  return (
    <>
      <Header>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Image src="/rectem.png" alt="Rectem Logo" width={40} height={40} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
          <ColorSchemeToggle />
        </Box>
      </Header>
      <Box
        sx={{
          maxWidth: 400,
          display: "flex",
          flexWrap: "wrap",
          p: 2,
          m: "auto",
        }}
      >
        <Typography sx={{ pb: 2 }} level="h4">
          Email Verification
        </Typography>
        <Typography>
          We have sent OTP verification code to your email
        </Typography>
        <Typography sx={{ py: 2 }}>
          Once you've verified your email, you'll be one step closer to
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
          <FormHelperText>
            <Link href="">Resend OTP</Link>
          </FormHelperText>
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
          OTP not received? <Link href="">Change email</Link>
        </Typography>
      </Box>
    </>
  );
}

function Header(props: BoxProps) {
  return (
    <Box
      component="header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.surface",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}
