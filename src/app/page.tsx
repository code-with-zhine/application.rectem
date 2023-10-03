"use client";
// Next / React
import Image from "next/image";

// UI library
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import { radioClasses } from "@mui/joy/Radio";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  GlobalStyles,
  Radio,
  RadioGroup,
  Typography,
  Sheet,
} from "@mui/joy";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { KeyboardArrowRight } from "@mui/icons-material";

// Custom components
import ColorSchemeToggle from "@/components/ThemeRegistry/ColorSchemeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
            "--Cover-width": "50vw", // must be `vw` only
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(12px)",
          backgroundColor: "white",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              alignItems: "left",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/rectem.png"
                alt="Rectem Logo"
                width={40}
                height={40}
              />
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              // gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                // gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}
          >
            <Typography level="h4">
              REDEEMERS COLLEGE OF TECHNOLOGY AND MANAGEMENT
            </Typography>
            <Typography>Carefully fill all informations correctly</Typography>

            <FormControl>
              <FormLabel sx={{ pt: 2 }}>PREFERRED APPLICATION MODE</FormLabel>
              <RadioGroup
                orientation="horizontal"
                defaultValue="outlined"
                name="radio-buttons-group"
              >
                <Radio value="outlined" label="Full-Time" variant="outlined" />
                <Radio value="soft" label="Part-Time" variant="soft" />
              </RadioGroup>
            </FormControl>

            <CustomizedRadio />
            <CustomCheckbox />
            <Button
              size="md"
              sx={{ width: 130, py: "10px" }}
              endDecorator={<KeyboardArrowRight />}
            >
              Continue
            </Button>
          </Box>
          <Box component="footer" sx={{ py: 1 }}>
            <Typography level="body-xs">
              All right reserved © CITM {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
          },
        })}
      />
    </>
  );
}

// In-Component
function CustomizedRadio() {
  return (
    <RadioGroup
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: "row",
        // gap: 2,
        py: 1,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: "3px solid",
            borderColor: "primary.500",
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: "contents",
          "& > svg": {
            zIndex: 2,
            position: "absolute",
            top: "-8px",
            right: "-8px",
            bgcolor: "background.surface",
            borderRadius: "50%",
          },
        },
      }}
    >
      {[
        { title: "National Diploma", slug: "ND" },
        { title: "Higher Diploma", slug: "HND" },
      ].map((value) => (
        <Sheet
          key={value.title}
          variant="outlined"
          sx={{
            borderRadius: "md",

            boxShadow: "sm",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mr: 1,
            p: 2,
            minWidth: 120,
          }}
        >
          <Radio
            id={value.title}
            value={value.title}
            checkedIcon={<CheckCircleRoundedIcon />}
          />
          <Avatar sx={{ mb: 1 }} variant="soft" size="sm" />
          <FormLabel htmlFor={value.title}>{value.title}</FormLabel>
          <FormLabel htmlFor={value.title}>{value.slug}</FormLabel>
        </Sheet>
      ))}
    </RadioGroup>
  );
}

import Checkbox from "@mui/joy/Checkbox";
import FormHelperText from "@mui/joy/FormHelperText";

function CustomCheckbox() {
  return (
    <FormControl size="sm" sx={{ maxWidth: 400, py: 2 }}>
      <Checkbox
        label={
          <>
            I have read and agree to the{" "}
            <Typography fontWeight="md">terms and conditions</Typography>.
          </>
        }
      />
      <FormHelperText>
        <Typography level="body-sm">
          Read our <Link href="#">terms and conditions</Link>.
        </Typography>
      </FormHelperText>
    </FormControl>
  );
}
