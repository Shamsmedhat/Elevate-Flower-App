"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { ChangeFormType } from "@/lib/types/auth-form";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useState } from "react";
// Lazy import
const LoginForm = dynamic(() => import("./login-form"), {
  ssr: false,
  loading: () => <p>Loading login</p>,
});
const RegisterForm = dynamic(() => import("./register-form"), {
  ssr: false,
  loading: () => <p>Loading register</p>,
});
const ForgotPasswordForm = dynamic(() => import("./forgot-password-form"), {
  ssr: false,
  loading: () => <p>Loading forgot password</p>,
});
const SetPasswordForm = dynamic(() => import("./set-password-form"), {
  ssr: false,
  loading: () => <p>Loading set password</p>,
});
const VerifyOTPForm = dynamic(() => import("./verify-otp-form"), {
  ssr: false,
  loading: () => <p>Loading verify </p>,
});

export default function AuthDialog() {
  // Translation
  const t = useTranslations();

  // State
  const [formName, setFormName] = useState<
    "login" | "register" | "forgot-password" | "verify-otp" | "set-password"
  >("login"); // login, register, forgot-password, verify-otp & set-password.
  // const [open, setOpen] = useState(false);

  // Functions
  function changeForm(
    formName: "login" | "register" | "forgot-password" | "verify-otp" | "set-password",
  ) {
    setFormName(formName);
  }

  // function closeDialog(open: boolean) {
  //   setOpen(!open);

  //   // Prevent showing the login form before dialog fully close immediately
  //   setTimeout(() => {
  //     setFormName(ChangeFormType.LOGIN);
  //   }, 500);
  // }

  // onOpenChange={(open) => closeDialog(open)} defaultOpen={open}
  return (
    <Dialog>
      {/* Login button */}
      <DialogTrigger asChild>
        <Button variant="default" className="rounded-3xl capitalize">
          {t("login")}
        </Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent className="sm:max-w-[425px]">
        {formName === "login" && (
          <>
            {/* Dialog header */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-normal capitalize">
                {t("login-to-your-account")}
              </DialogTitle>
            </DialogHeader>
            <LoginForm changeForm={changeForm} />
          </>
        )}
        {formName === "register" && (
          <>
            {/* Dialog header */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-normal capitalize">
                {t("create-account")}
              </DialogTitle>
            </DialogHeader>
            <RegisterForm changeForm={changeForm} />
          </>
        )}
        {formName === "forgot-password" && (
          <>
            {/* Dialog header */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-normal capitalize">
                {t("create-account")}
              </DialogTitle>
            </DialogHeader>
            <ForgotPasswordForm changeForm={changeForm} />
          </>
        )}
        {formName === "set-password" && (
          <>
            {/* Dialog header */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-normal capitalize">
                {t("create-account")}
              </DialogTitle>
            </DialogHeader>
            <SetPasswordForm changeForm={changeForm} />
          </>
        )}
        {formName === "verify-otp" && (
          <>
            {/* Dialog header */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-normal capitalize">
                {t("create-account")}
              </DialogTitle>
            </DialogHeader>
            <VerifyOTPForm changeForm={changeForm} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
