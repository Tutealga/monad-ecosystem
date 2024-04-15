import 'dotenv/config';

export const getProjects = async ({params, native}) => {
    const csv = await fetch(process.env.GOOGLE_SHEETS)
    .then((res) => res.text());

    const projects = csv
    .split('\n')
    .slice(1)
    .map((row) => {
        const [category, name, native, website, x, discord, categoria, subcategory, img] = row.split(',');

        return {category, name, native, website, x, discord, categoria, subcategory, img}
    });

    if(params) {
        if(native === "true"){
            return projects.filter(project => project.categoria === params && project.native === "TRUE" && project.name) 
        }
        return projects.filter(project => project.categoria === params && project.name)
    } else {
        return projects
    }
}