import { getProjects } from "@/services/fetchDocs";
import Project from "./Projects";

const FilteredProjects = async ({params}) => {
    const projects = await getProjects({params});

    return (
      <section className="w-full flex flex-col gap-8 items-center z-20 col-span-2 sm:col-span-12"> 
      <h3 className="sm:text-4xl font-bold text-3xl">{params}</h3>
    <ul className="w-full gap-6 grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
    {
        projects.map(project => <Project key={project.name} project={project}/>)
    }
    </ul>
      </section>
      )
}

export default FilteredProjects