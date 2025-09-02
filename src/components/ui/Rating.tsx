import StarIcon from "@mui/icons-material/Star";

function Rating({ value }: { value: number | undefined }) {
  if (!value) return;

  return (
    <span className="flex items-center gap-1">
      {value.toFixed(1)}
      <StarIcon fontSize="small" />
    </span>
  );
}

export default Rating;
