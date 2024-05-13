const Project = ({project}) => {
  console.log(project)

  return (
   <a href={project.website ? project.website : project.x} target="__blank" className="hover:bg-opacity-20 hover:scale-105 border-[#836EF9] border-opacity-30 duration-200 border bg-[#836EF9] bg-opacity-10 rounded-lg backdrop-blur-sm">
     <div className="flex flex-col p-4 justify-between">
         <div className="flex flex-row items-center justify-between">
         {project.native === "TRUE" ? <img src="https://assets-global.website-files.com/64c26cc84790d118b80c38c9/6529c7409cc925522834f61b_monad-logo-mark-white-rgb.svg" className="w-6 h-6"/> :  <span></span>}
         <svg className="place-self-end w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" fill="#F7EDE8"/></svg>
         </div>
         <div className="flex flex-col items-center gap-6">
         <div className="filter">
         <img src={project.img} className="w-[65px] h-[65px] sm:w-[80px] clip sm:h-[80px]"/>
       </div>
         <div className="flex flex-col items-center gap-4 justify-between">
         <h3 className="font-bold text-xl text-center">{project.name}</h3>
          <span className="text-xs bg-[#836EF9] text-center rounded-lg py-1 px-2">{project.subcategory}</span>
         </div>
         </div>
      </div>
   </a>       
  )
}

export default Project