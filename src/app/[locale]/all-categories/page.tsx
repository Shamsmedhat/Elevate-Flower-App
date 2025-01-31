import { useTranslations } from "next-intl";

export default function AllCategories() {
  // Translations
  const t = useTranslations();

  return <div>{t("allcategories")}</div>;
}
