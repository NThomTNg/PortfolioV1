import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2";

  const variantStyles = {
    default: "bg-teal-600 text-white hover:bg-teal-700",
    outline:
      "border border-slate-300 bg-transparent hover:bg-slate-100 text-slate-900",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
