export default interface IBook {
    id: string;
    volumeInfo: {
        title: string;
        description?: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        imageLinks?: {
            smallThumbnail: string;
        }
    };
}