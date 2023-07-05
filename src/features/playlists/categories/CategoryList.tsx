import { useGetCategoriesQuery } from "../api/playlistApi"
import { Loader } from "../../../components/Loader/Loader"
import { CategoryItem } from "./CategoryItem"
export const Categories = () => {
  const { data: categories, isLoading, isFetching } = useGetCategoriesQuery()
  if (isLoading || isFetching) {
    return <Loader />
  }
  return (
    <div className="grid grid-cols-3 bg-[#202020] gap-2 pt-5">
      {categories?.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}
