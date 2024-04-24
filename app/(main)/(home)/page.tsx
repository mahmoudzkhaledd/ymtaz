
import CategoryCard from "./_components/CategoryCard";
import HomePageHeader from "../../../components/General/PageHeader";
import { getCategories } from "@/Services/GetCategories";
import NotFoundComponent from "@/components/General/NotFoundComponent";

export default async function Home() {
  const res = await getCategories();
  if (res == null) {
    return <NotFoundComponent
      title="هناك خطأ"
      subTitle="الرجاء العودة في وقت لاحق"
    />
  }
  return (
    <main className=" size-full flex flex-col items-center">
      <HomePageHeader title={res.message} />
      <div className="mt-6 grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3">
        {
          res.data.categories.map((e, idx) => <CategoryCard key={idx} {...e} />)
        }
      </div>
    </main>
  );
}
