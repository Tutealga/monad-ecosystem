import { getProjects } from "@/services/getProjects";
import Project from "./Project";

const Projects = async ({params, native, search}) => {
    const projects = await getProjects({params, native});

    if(projects.length > 0){
      return (
        <section className="w-full z-20"> 
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        search
        ?
        projects.map(project => project.name.toLowerCase().includes(search.toLowerCase()) && <Project key={project.name} project={project}/>)
        :
        projects.map(project => <Project key={project.name} project={project}/>)
      }
      </ul>
        </section>
        )
    } else {
      return (
        <section className="w-full z-20"> 
          <span className="text-lg sm:text-xl">No results for this search.</span>
        </section>
        )
    }
}

export default Projects