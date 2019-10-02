export interface IForum {
    ID: number,
    title: string,
    author_id: number,
    description: string,
    comments: any[],
    candidate_id: number,
}