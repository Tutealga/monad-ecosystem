import { getProducts } from "@/services/fetchDocs";
import Product from "./Product";

const FilteredProducts = async ({params}) => {
    const products = await getProducts({params});

    return (
      <section className="w-full flex flex-col gap-8 items-center z-20 col-span-2 sm:col-span-12"> 
      <h3 className="sm:text-4xl font-bold text-3xl">{params}</h3>
    <article className="w-full gap-6 grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    {
        products.map(product => <Product key={product.name} product={product}/>)
    }
    </article>
      </section>
      )
}

export default FilteredProducts