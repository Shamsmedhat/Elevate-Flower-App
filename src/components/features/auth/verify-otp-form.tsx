"use client";

import React from "react";

// Type
type VerifyOTPFormProps = {
  changeForm: (
    formName: "login" | "register" | "forgot-password" | "verify-otp" | "set-password",
  ) => void;
};

export default function VerifyOTPForm({ changeForm }: VerifyOTPFormProps) {
  return <div>VerifyOTPForm</div>;
}
