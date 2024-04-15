import FilteredProjects from "@/components/FilteredProjects";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";

export default async function Home({ searchParams }) {

    return (
      <main className="flex mx-auto min-h-screen flex-col w-full max-w-[1200px]">
        <div className="flex flex-col mx-auto w-full mb-16 justify-center gap-8">
        <h1 className="sm:text-5xl font-bold z-20 text-center text-4xl">Monad ecosystem</h1>
        <Filters/>
        </div>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mb-16">
          {
            searchParams.category
            ?
            <FilteredProjects native={searchParams.native} params={searchParams.category}/>
            :
            <>
            <FilteredProjects native={searchParams.native} params={"DeFi"}/>
        <FilteredProjects native={searchParams.native} params={"Bridge"}/>
        <FilteredProjects native={searchParams.native} params={"Wallet/Payments"}/>
        <FilteredProjects native={searchParams.native} params={"Marketplace/NFT"}/>
        <FilteredProjects native={searchParams.native} params={"Infrastructure"}/>
        <FilteredProjects native={searchParams.native} params={"Game"}/>
        <FilteredProjects native={searchParams.native} params={"Other"}/>
            </>
          }
        </section>
        <Footer/>
     </main>
    )
  }  
