import Projects from "@/components/Projects";
import Filters from "@/components/Filters";

export default async function Home({ searchParams }) {

    return (
        <>
        <div className="flex flex-col mx-auto w-full mb-8 gap-8">
        <h1 className="sm:text-6xl font-bold z-20 text-left text-5xl">Monad Ecosystem</h1>
        <Filters/>
        </div>
        <section className="w-full mb-16 z-20">
          {
            searchParams.category
            ?
            <Projects native={searchParams.native} params={searchParams.category} search={searchParams.search}/>
            :
            <Projects native={searchParams.native} search={searchParams.search}/>
          }
        </section>
        </>
    )
  }  
