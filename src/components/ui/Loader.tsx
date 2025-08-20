import { Box, LinearProgress } from "@mui/material";

function Loader() {
  return (
    <div className="pt-10">
      <div className="mb-5 h-9 w-72 bg-[#63626311]" />
      <Box sx={{ width: "58rem", marginY: "15px" }}>
        <LinearProgress color="inherit" />
      </Box>
      <div className="flex gap-5">
        <div className="h-36 w-72 bg-[#63626311]" />
        <div className="h-36 w-72 bg-[#63626311]" />
        <div className="h-36 w-72 bg-[#63626311]" />
      </div>
    </div>
  );
}

export default Loader;
