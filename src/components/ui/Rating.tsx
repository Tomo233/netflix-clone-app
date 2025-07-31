import StarIcon from "@mui/icons-material/Star";

function Rating({ value }: { value: string | number }) {
  return (
    <span className="flex items-center gap-1">
      {value}
      <StarIcon fontSize="small" />
    </span>
  );
}

export default Rating;
