import { Category } from "../types"
import { useNavigate } from "react-router-dom"

interface PropTypes {
  category: Category
}
export const CategoryItem = ({ category }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <span
      onClick={() => navigate(`category/${category.id}`)}
      className="border-2 border-black hover:underline cursor-pointer py-4 text-5xl text-center text-white pt-52"
      style={{
        background: `url(${category.icons[0].url})`,
        backgroundSize: "cover",
      }}
    >
      {category.name}
    </span>
  )
}
