export default class Post {
  readonly id: number;

  title: string;

  content: string;

  constructor(id?: number, title?: string, content?: string) {
    this.id = id === undefined ? 0 : id;
    this.title = title === undefined ? '' : title;
    this.content = content === undefined ? '' : content;

    return this;
  }

  static fromPost(post: Post): Post {
    return new Post(post.id, post.title, post.content);
  }
}
