import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CategoryCard from "./category-card";

type PageProps = {
  categories: Category[];
};

export default function CategorySlider({ categories }: PageProps) {
  return (
    <section className="container mx-auto my-5">
      <Carousel>
        <CarouselContent className="flex">
          {categories.map((c) => (
            <CarouselItem key={c._id} className="basis-1/5">
              <CategoryCard category={c} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
