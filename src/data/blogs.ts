
export interface Blog {
    id: number;
    title: string;
    content: string;
    likes: number;
    comments: string[];
}

export const blogs: Blog[] = [
    {
        id: 0,
        title: 'The first blog on the website',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolorum provident et, modi fugiat ipsum delectus voluptas cupiditate aliquid laboriosam hic nobis facere aliquam quos? Ut hic, excepturi quam ratione adipisci recusandae iure nam quibusdam! Cupiditate vero adipisci cum ipsum perspiciatis. Laboriosam nobis deserunt corporis provident. Voluptas dolor rerum voluptatem.',
        likes: 0,
        comments: ['This is the first comment','Great blog as usual!']
    },
    {
        id: 1,
        title: 'The second blog on the website',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolorum provident et, modi fugiat ipsum delectus voluptas cupiditate aliquid laboriosam hic nobis facere aliquam quos? Ut hic, excepturi quam ratione adipisci recusandae iure nam quibusdam! Cupiditate vero adipisci cum ipsum perspiciatis. Laboriosam nobis deserunt corporis provident. Voluptas dolor rerum voluptatem.',
        likes: 0,
        comments: ['I dont like this blog','Great blog as usual!']
    },
];