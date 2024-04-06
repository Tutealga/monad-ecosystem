import FilteredProjects from "@/components/FilteredProjects";
import Filters from "@/components/Filters";

export default async function Home({ searchParams }) {
 
    return (
      <main className="flex mx-auto min-h-screen flex-col w-full max-w-[1200px]">
        <div className="flex flex-col mx-auto w-full mb-16 justify-center gap-8">
        <h1 className="sm:text-5xl font-bold z-20 text-center text-4xl">Monad ecosystem</h1>
        <Filters/>
        </div>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          {
            searchParams.category
            ?
            <FilteredProjects params={searchParams.category}/>
            :
            <>
            <FilteredProjects params={"DeFi"}/>
        <FilteredProjects params={"Bridge"}/>
        <FilteredProjects params={"Wallet/Payments"}/>
        <FilteredProjects params={"Gaming/NFT"}/>
        <FilteredProjects params={"Oracle"}/>
        <FilteredProjects params={"Others"}/>
            </>
          }
        </section>
     </main>
    )
  }  
