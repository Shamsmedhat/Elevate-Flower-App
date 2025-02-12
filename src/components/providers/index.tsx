import NextIntlProvider from "./components/next-intl.provider";

type PageProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: PageProps) {
  return <NextIntlProvider>{children}</NextIntlProvider>;
}
