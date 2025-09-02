import type { ComponentPropsWithoutRef } from "react";

type AuthInputProps = {
  variant?: "login" | "signup";
} & ComponentPropsWithoutRef<"input">;

function AuthInput({ variant = "signup", ...otherProps }: AuthInputProps) {
  return (
    <input
      {...otherProps}
      className={`border-border-color rounded-sm border px-3 py-3 ${variant === "login" ? "w-80" : "w-56"}`}
    />
  );
}

export default AuthInput;
