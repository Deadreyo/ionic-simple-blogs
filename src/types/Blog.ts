
export interface Blog {
    id: string;
    title: string;
    content: string;
    likes: number;
    comments: Comment[];
}

export interface Comment {
    content: string;
    likes: number;
}