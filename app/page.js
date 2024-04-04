import FilteredProducts from "@/components/FilteredProducts";
import Filters from "@/components/Filters";

export default function Home({ searchParams }) {

    return (
      <main className="flex mx-auto min-h-screen flex-col w-full max-w-[1200px]">
        <div className="flex flex-col mx-auto w-full mb-16 justify-center gap-8">
        <h1 className="sm:text-5xl font-bold z-20 text-center text-4xl">Explore the Monad ecosystem</h1>
        <Filters/>
        </div>
        <section className="w-full grid grid-cols-2 sm:grid-cols-12 gap-16">
          {
            searchParams.category
            ?
            <FilteredProducts params={searchParams.category}/>
            :
            <>
            <FilteredProducts params={"DeFi"}/>
        <FilteredProducts params={"Bridge"}/>
        <FilteredProducts params={"Wallet/Payments"}/>
        <FilteredProducts params={"Gaming/NFT"}/>
        <FilteredProducts params={"Oracle"}/>
        <FilteredProducts params={"Others"}/>
            </>
          }
        </section>
     </main>
    )
  }  
