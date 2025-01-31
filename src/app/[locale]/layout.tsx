import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages();

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
