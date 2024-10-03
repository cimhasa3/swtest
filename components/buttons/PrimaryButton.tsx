import React from "react";

export default function PrimaryButton({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-primary text-white font-black py-[13px] px-5 rounded-[7px] cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
