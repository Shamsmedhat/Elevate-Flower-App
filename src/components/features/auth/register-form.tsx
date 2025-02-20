"use client";

import React from "react";

// Type
type RegisterFormProps = {
  changeForm: (
    formName: "login" | "register" | "forgot-password" | "verify-otp" | "set-password",
  ) => void;
};

export default function RegisterForm({ changeForm }: RegisterFormProps) {
  return <div>RegisterForm</div>;
}
