"use client";

import React from "react";

// Type
type ForgotPasswordFormProps = {
  changeForm: (
    formName: "login" | "register" | "forgot-password" | "verify-otp" | "set-password",
  ) => void;
};

export default function ForgotPasswordForm({ changeForm }: ForgotPasswordFormProps) {
  return <div>ForgotPasswordForm</div>;
}
