import { getCategories } from "@/lib/apis/category/category.api";
import CategorySlider from "./components/category-slider";

export default async function Page() {
  const payload = await getCategories();

  return (
    <div>
      <CategorySlider categories={payload.categories} />
    </div>
  );
}
