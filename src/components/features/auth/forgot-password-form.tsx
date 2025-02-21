"use client";

import { ChangeAuthForm } from "@/lib/constants/auth-form.constant";
import React from "react";

// Type
type ForgotPasswordFormProps = {
  changeForm: (formName: ChangeAuthForm) => void;
};

export default function ForgotPasswordForm({ changeForm }: ForgotPasswordFormProps) {
  return <div>ForgotPasswordForm</div>;
}
