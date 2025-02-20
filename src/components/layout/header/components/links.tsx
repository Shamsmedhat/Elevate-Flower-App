"use client";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

export default function Links() {
  // Translation
  const t = useTranslations();

  // Navigation
  const pathname = usePathname();

  // Function
  const isCurrentPath = (path: string) => pathname.startsWith(path);

  return (
    <ul className="flex items-center justify-center gap-6 capitalize rtl:flex-row">
      {/* Home */}
      <li>
        <Link
          href={"/"}
          className={cn(pathname === "/" ? "text-custom-rose-900" : "hover:text-custom-rose-900")}
        >
          {t("home")}
        </Link>
      </li>

      {/* All categories */}
      <li>
        <Link
          href={"/all-categories"}
          className={cn(
            isCurrentPath("/all-categories")
              ? "text-custom-rose-900"
              : "hover:text-custom-rose-900",
          )}
        >
          {t("all-categories")}
        </Link>
      </li>

      {/* About */}
      <li>
        <Link
          href={"/about"}
          className={cn(
            isCurrentPath("/about") ? "text-custom-rose-900" : "hover:text-custom-rose-900",
          )}
        >
          {t("about")}
        </Link>
      </li>

      {/* Contact */}
      <li>
        <Link
          href={"/contact"}
          className={cn(
            isCurrentPath("/contact") ? "text-custom-rose-900" : "hover:text-custom-rose-900",
          )}
        >
          {t("contact")}
        </Link>
      </li>
    </ul>
  );
}
