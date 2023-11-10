import { useGetArtistsQuery } from "../api/artistApi"
import { ArtistItem } from "../item/ArtistItem"
import { Loader } from "../../../components/Loader/Loader"
export const ArtistsList = () => {
  const { data: artists, isLoading, isFetching } = useGetArtistsQuery()
  if (isFetching || isLoading) {
    return <Loader />
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 bg-[#202020] pt-3">
      {artists?.map((artist) => {
        return <ArtistItem key={artist.id} artist={artist} />
      })}
    </div>
  )
}
