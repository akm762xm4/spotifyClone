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
        className="cursor-pointer py-4 text-3xl md:text-5xl text-center text-white pb-52 antialiased"
        style={{ backdropFilter: "brightness(80%)" }}
      >
        {category.name}
      </div>
    </span>
  )
}
