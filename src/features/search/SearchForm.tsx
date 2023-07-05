import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
const SearchForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    navigate(`/songs/search/${data.searchTerm}`)
  }

  return (
    <form
      className="flex gap-1 p-1 bg-gray-500 rounded-md "
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="rounded-md px-1"
        autoComplete="off"
        type="text"
        {...register("searchTerm")}
      />
      <button
        className="hover:bg-gray-300 rounded-md transition-all duration-150 p-1"
        onClick={() => onSubmit}
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </form>
  )
}

export default SearchForm
