import { getCommunities } from "@/services/fetchCommunities";
import Community from "./Community";
import Search from "./Search";

const Communities = async ({search}) => {
    const communities = await getCommunities();

  return (
    <section className="w-full flex flex-col gap-16 z-20 justify-center"> 
    <Search />
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {
      search
      ?
      communities.map(community => community.country.toLowerCase().includes(search.toLowerCase()) && <Community key={community.no} community={community}/>)
      :
      communities.map(community => <Community key={community.no} community={community}/>)
    }
    </ul>
      </section>
  )
}

export default Communities