import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid"
export const Loader = () => {
  return (
    <div className="bg-gray-800 bg-gradient-to-b from-black to-green-300 flex justify-center items-center h-screen">
      <EllipsisHorizontalIcon className="w-36 h-36 animate-bounce" />
    </div>
  )
}
