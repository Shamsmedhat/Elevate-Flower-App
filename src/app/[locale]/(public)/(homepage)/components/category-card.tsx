import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type PageProps = {
  category: Category;
};

export default function CategoryCard({ category }: PageProps) {
  // Translation
  const t = useTranslations();

  return (
    <div className="bg-main-light flex items-center justify-start gap-4 rounded-[20px] p-4">
      <div className="bg-custom-rose-900 rounded-full p-4 text-center">
        <Image
          src={category.image}
          alt={category.name}
          className="brightness-[9]"
          width={50}
          height={0}
        />
      </div>
      <div>
        <h3 className="text-blue-gray-900 text-lg font-semibold">{category.name}</h3>
        <h4 className="text-blue-gray-500">
          {t("categories-count", { count: category.productsCount })}
        </h4>
      </div>
    </div>
  );
}
