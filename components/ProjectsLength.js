import { getProjects } from "@/services/fetchDocs";

const ProjectsLength = async () => {
 const projects = await getProjects({});

  return (
    <div className="flex flex-row items-center justify-evenly">
        <div className="bg-[#836EF9] p-6 rounded-[5px]">
            <span className="font-bold text-[#F7EDE8] text-3xl">{projects.length}</span>
            <p className="text-[#F7EDE8] opacity-90 text-xl">dApps</p>
        </div>
    </div>
  )
}

export default ProjectsLength