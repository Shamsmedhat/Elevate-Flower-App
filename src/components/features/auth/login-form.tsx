"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";
import { LuEye } from "react-icons/lu";
// import { LuEyeOff } from "react-icons/lu";

// Type
type LoginFormProps = {
  changeForm: (
    formName: "login" | "register" | "forgot-password" | "verify-otp" | "set-password",
  ) => void;
};

export default function LoginForm({ changeForm }: LoginFormProps) {
  // Translation
  const t = useTranslations();

  // Schema
  const LoginFormSchema = z.object({
    email: z.string().email().min(5, { message: "Email must be at least 5 characters." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  });
  type Inputs = z.infer<typeof LoginFormSchema>;

  // Form
  const form = useForm<Inputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Function
  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values);
  }

  return (
    <>
      {/* Dialog Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel className="sr-only">{t("email")}</FormLabel>
                <FormControl>
                  {/* Input */}
                  <Input placeholder={t("email")} className="rounded-xl capitalize" {...field} />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel className="sr-only">{t("password")}</FormLabel>
                <FormControl>
                  {/* Input */}
                  <Input
                    placeholder={t("password")}
                    type="password"
                    className="rounded-xl capitalize"
                    {...field}
                  />
                  <LuEye />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <div className="flex w-full flex-col">
              {/* Forgot password */}
              <div className="flex justify-end">
                <button
                  className="mt-3 border-none bg-transparent text-xs capitalize text-custom-rose-900 underline"
                  onClick={() => changeForm("forgot-password")}
                >
                  {t("forgot-password")}
                </button>
              </div>
              <div className="flex w-full flex-col text-xs capitalize">
                {/* No account (register) */}
                <div className="mx-auto space-x-1">
                  <span>{t("no-account")}</span>
                  <button
                    className="my-3 border-none bg-transparent capitalize text-custom-rose-900 underline"
                    onClick={() => changeForm("register")}
                  >
                    {t("create-one-here")}
                  </button>
                </div>

                {/* Submit */}
                <Button type="submit" className="capitalize">
                  {t("submit")}
                </Button>
              </div>
            </div>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
