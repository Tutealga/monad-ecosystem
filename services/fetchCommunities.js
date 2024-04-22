import 'dotenv/config';

export const getCommunities = async () => {
    const csv = await fetch(process.env.GOOGLE_SHEETS_2)
    .then((res) => res.text());

    const communities = csv
    .split('\n')
    .slice(1)
    .map((row) => {
        const [no, country, telegram, twitter, img] = row.split(',');

        return {no, country, telegram, twitter, img}
    });

        return communities
    }