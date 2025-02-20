"use client";

import React from "react";

// Type
type SetPasswordFormProps = {
  changeForm: (
    formName: "login" | "register" | "forgot-password" | "verify-otp" | "set-password",
  ) => void;
};

export default function SetPasswordForm({ changeForm }: SetPasswordFormProps) {
  return <div>SetPasswordForm</div>;
}
