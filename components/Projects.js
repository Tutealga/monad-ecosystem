const Projects = ({project}) => {

  return (
   <a href={project.website ? project.website : project.x} className="hover:scale-105 border-[#836EF9] duration-200 border bg-[#836EF9] bg-opacity-30 rounded-[5px]">
     <div className="flex flex-col p-6 justify-center gap-6">
        <h3 className="text-base text-center font-bold">{project.name}</h3>
        <div className="filter mx-auto">
         <img src={project.img} className="w-[65px] h-[65px] sm:w-[100px] clip sm:h-[100px]"/>
       </div>
         <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex gap-2">
          {
            project.x
            &&
<a className="w-[1rem] h-auto" href={project.x}>
             <img src="https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/647f71a77a2f4691b4fa23e0_tw.png"/>
           </a>
          }    
           {
            project.discord
            &&
            <a className="w-[1rem] h-auto" href={project.discord}>
             <img src="https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/647f71a77a2f4691b4fa23e1_dsc.png"/>
           </a>
           }
          </div>
           <span className="text-sm">{project.subcategory}</span>
         </div>
     </div>
   </a>       
  )
}

export default Projects