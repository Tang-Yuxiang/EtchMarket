import { Box } from "@mui/material";

import HomeLayout from "./HomeLayout";
export default function Home() {
  return (
    <HomeLayout>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: "10px", sm: "140px" },
          pb: "110px",
          pt: "115px",
        }}
      >
        123
      </Box>
    </HomeLayout>
  );
}
