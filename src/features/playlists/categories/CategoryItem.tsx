import { Category } from "../types"
import { useNavigate } from "react-router-dom"

interface PropTypes {
  category: Category
}
export const CategoryItem = ({ category }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <span
      style={{
        background: `url(${category.icons[0].url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        onClick={() => navigate(`category/${category.id}`)}
        className="hover:underline cursor-pointer py-4 text-5xl text-center text-white pb-52"
        style={{ backdropFilter: "brightness(70%)" }}
      >
        {category.name}
      </div>
    </span>
  )
}
