// Translations
import { Locale, routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
// Navigation
import { notFound } from "next/navigation";
// Fonts
import { Poppins } from "next/font/google";
import Providers from "@/components/providers";
import Header from "@/components/layout/header";

// Variable
const poppins = Poppins({
  subsets: ["latin"],
  display: "auto",
  weight: ["200", "300", "400", "500", "600", "700"],
});

// Page props type
type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: Locale };
};

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  // Redirect to not found page if locale is not supported
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
