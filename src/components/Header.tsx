import { Box } from "@mui/joy";
import Image from "next/image";
import ColorSchemeToggle from "./ThemeRegistry/ColorSchemeToggle";

export default function () {
  return (
    <>
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
    </>
  );
}
