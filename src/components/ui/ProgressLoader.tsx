import { Stack, LinearProgress } from "@mui/material";

function ProgressLoader() {
  return (
    <div className="mt-5 mb-56">
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <p className="text-center text-2xl font-semibold tracking-wide uppercase">
          Loading...
        </p>
        <LinearProgress color="error" />
      </Stack>
    </div>
  );
}

export default ProgressLoader;
