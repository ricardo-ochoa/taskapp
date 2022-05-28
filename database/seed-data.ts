
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    title: string,
    description: string;
    createdAt: number;
    status: string;
}

export const seedData: SeedData = {
    entries: [
        {
        title: "Roronoa Zoro full Haki",
        description: "@emotion/react > @emotion/babel-plugin@11.9.2",
        createdAt: Date.now(),
        status: 'pennding',
        },
        {
         title: "Hello world!",
         description: "Hola Mugiwara Luffy",
         createdAt: Date.now()-1,
         status: 'pennding',
        },
        {
         title: "NFT Galllery VR",
         description: "@emotion/react > @emotion/babel-plugin > @babel/plugin-syntax-jsx@7.17.12",
         createdAt: Date.now()-2,
         status: 'pennding',
        }
    ]
}