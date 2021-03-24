
export class Post {
    public heading: string;
    public content: string;
    public imageURL: string;
    public textAreaSmall?: string;
    public select?: string;

    constructor(heading: string, content: string, imageURL: string, select: string, textAreaSmall: string) {
        this.heading = heading;
        this.content = content;
        this.imageURL = imageURL;
        this.textAreaSmall = textAreaSmall;
        this.select = select;
    }
}
