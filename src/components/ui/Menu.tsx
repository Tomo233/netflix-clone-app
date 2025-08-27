import { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router";

type MenuProps = {
  data: string[];
  paramName: string;
  grid?: boolean;
};

function Menu({ data, grid = false, paramName }: MenuProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState(() => {
    const paramValue = searchParams.get(paramName);
    return data.find((el) => el.includes(paramValue ?? "")) ?? data[0];
  });

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    const paramValue = event.target.value.split(" ")[1];
    searchParams.set(paramName, paramValue);
    setSearchParams(searchParams);
  };

  const columnCount =
    data.length <= 3 ? 1 : data.length <= 6 ? 2 : data.length <= 9 ? 3 : 4;

  return (
    <Box
      sx={{
        minWidth: 125,
      }}
    >
      <FormControl
        fullWidth
        size="small"
        sx={{
          borderRadius: 1,
          backgroundColor: "rgba(0, 0, 0, 0.1)",

          "& .MuiOutlinedInput-root.Mui-focused": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          displayEmpty
          input={<OutlinedInput notched={false} />}
          label="Genre"
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#141414",
                padding: 0,

                "& ul": grid
                  ? {
                      display: "grid",
                      gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                      padding: 0,
                    }
                  : undefined,
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          }}
          sx={{
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 1,

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              backgroundColor: "transparent",
            },
            "& .MuiSvgIcon-root": {
              color: "#fff",
            },
          }}
        >
          {data.map((el, i) => {
            return (
              <MenuItem
                key={i}
                value={el}
                sx={{
                  backgroundColor: "#141414 !important",
                  height: "40px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Menu;
