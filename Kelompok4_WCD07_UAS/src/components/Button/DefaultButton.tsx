"use client";

import classNames from "classnames";
import React, { useMemo } from "react";

type Props = {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  color?: "secondary" | "primary";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
};

function DefaultButton({
  children,
  variant = "solid",
  color = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  isLoading = false,
  loadingText = "Loading...",
}: Props) {
  const variantColorClasses = useMemo(() => {
    switch (variant) {
      case "solid":
        switch (color) {
          case "secondary":
            return "bg-main-yellow text-white";
          case "primary":
            return "bg-main-green text-white";
          default:
            return "bg-main-green text-white";
        }
      case "outline":
        switch (color) {
          case "secondary":
            return "border border-main-yellow text-main-yellow";
          case "primary":
            return "border border-main-green text-main-green";
          default:
            return "border border-main-green text-main-green";
        }
      case "ghost":
        switch (color) {
          case "secondary":
            return "text-main-yellow";
          case "primary":
            return "text-main-green";
          default:
            return "text-main-green";
        }
      default:
        break;
    }
    return "";
  }, [variant, color]);
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classNames(
        className,
        "py-1 px-4 w-fit rounded-lg cursor-pointer font-semibold flex items-center justify-center",
        variantColorClasses
      )}
    >
      {isLoading && (
        <svg
          className="mr-3 -ml-1 size-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {isLoading && loadingText ? loadingText : children}
    </button>
  );
}

export default DefaultButton;
