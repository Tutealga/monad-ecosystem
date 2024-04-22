import Communities from "@/components/Communities";

export default async function Home({ searchParams }) {

    return (
        <>
        <h1 className="sm:text-6xl font-bold z-20 text-left text-4xl mb-8">Local Community</h1>
        <section className="w-full mb-8 z-20">
            <Communities search={searchParams.search} />
        </section>
        </>
    )
  }  