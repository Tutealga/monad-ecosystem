import { getProjects } from "@/services/fetchDocs";
import Project from "./Projects";

const FilteredProjects = async ({params}) => {
    const projects = await getProjects({params});

    return (
      <section className="w-full flex flex-col gap-8 z-20 col-span-1 sm:col-span-2 md:col-span-4"> 
      <div className="flex flex-row items-center justify-between">
      <h3 className="sm:text-4xl font-bold text-3xl">{params}</h3>
      <span className="sm:text-2xl text-xl font-bold">{projects.length} dApps</span>
      </div>
    <ul className="w-full gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
    {
        projects.map(project => <Project key={project.name} project={project}/>)
    }
    </ul>
      </section>
      )
}

export default FilteredProjects