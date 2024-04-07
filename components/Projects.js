const Projects = ({project}) => {

  return (
   <a href={project.website ? project.website : project.x} target="__blank" className="hover:bg-opacity-20 hover:scale-105 border-[#836EF9] border-opacity-30 duration-200 border bg-[#836EF9] bg-opacity-10 rounded-lg backdrop-blur-sm">
     <div className="flex flex-col p-2 justify-between">
         <div className="grid grid-cols-2 items-center justify-between">
         {project.native === "TRUE" ? <span className="bg-[#836EF9] p-1 rounded-lg w-[42px] sm:w-[47px] text-xs sm:text-sm">Native</span> :  <span></span>}
         <svg className="place-self-end" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" fill="#F7EDE8"/></svg>
         </div>
         <div className="flex flex-col p-4 items-center gap-6">
         <div className="filter">
         <img src={project.img} className="w-[65px] h-[65px] sm:w-[80px] clip sm:h-[80px]"/>
       </div>
         <div className="flex flex-col items-center gap-6 justify-between">
         <h3 className="font-bold text-xl text-center">{project.name}</h3>
         <span className="text-xs text-center">{project.subcategory}</span>
         </div>
         </div>
      </div>
   </a>       
  )
}

export default Projects