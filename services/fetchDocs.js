import 'dotenv/config';

export const getProjects = async ({params}) => {
    const csv = await fetch(process.env.GOOGLE_SHEETS)
    .then((res) => res.text());

    const projects = csv
    .split('\n')
    .slice(1)
    .map((row) => {
        const [update, category, name, native, website, x, discord, announced, categoria, subcategory, img] = row.split(',');

        return {update, category, name, native, website, x, discord, announced, categoria, subcategory, img}
    });

    if(params) {
        return projects.filter(project => project.categoria === params)
    } else {
        return projects
    }
}