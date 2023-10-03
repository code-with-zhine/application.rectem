"use client";
// Next / React
import * as React from "react";
import Image from "next/image";

// UI library
import Box, { BoxProps } from "@mui/joy/Box";
import { Divider, FormControl, Radio, RadioGroup, Typography } from "@mui/joy";

// Custom components
import ColorSchemeToggle from "@/components/ThemeRegistry/ColorSchemeToggle";

export default function ApplicationPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Root>
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
      <SidePane>
        <Box sx={{ p: 2 }}>
          <Typography level="h4">{`Let’s get started`}</Typography>
          <Typography>
            Only a few minutes required to complete your registration.
          </Typography>
        </Box>
        <Divider />
        <FormControl sx={{ p: 2 }}>
          <RadioGroup defaultValue="2" name="radio-buttons-group">
            <Radio
              disabled
              value="1"
              label="Get Started"
              color="primary"
              size="sm"
            />
            <Radio value="2" label="Personal Details" size="sm" />
            <Radio
              disabled
              value="danger"
              label="Contact Information"
              size="sm"
            />
            <Radio disabled value="success" label="Next Of Kin" size="sm" />
            <Radio disabled value="warning" label="Sponsor(s)" size="sm" />
            <Radio disabled value="warning" label="Referee" size="sm" />
            <Radio
              disabled
              value="warning"
              label="Proposed Course Of Study"
              size="sm"
            />
            <Radio disabled value="warning" label="Examination(s)" size="sm" />
            <Radio
              disabled
              value="warning"
              label="Upload Certificate(s)"
              size="sm"
            />
            <Radio disabled value="warning" label="Upload Passport" size="sm" />
          </RadioGroup>
        </FormControl>
      </SidePane>
      <Main>{children}</Main>
    </Root>
  );
}

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(200px, 250px) minmax(450px, 1fr)",
          },
          gridTemplateRows: {
            xs: "64px",
          },
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
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

function SidePane(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: "background.surface",
          borderRight: "1px solid",
          borderColor: "divider",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props: BoxProps) {
  return (
    <Box
      component="main"
      sx={{ bgcolor: "background.surface", pb: 5 }}
      {...props}
    />
  );
}
