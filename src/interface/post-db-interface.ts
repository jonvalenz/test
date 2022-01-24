import Post from '@/models/post';
import postsRef from '../assets/post-db';

export function addPost(post: Post): void {
  const newPost: Post = new Post(
    Date.now(),
    post.title,
    post.content,
  );
  postsRef.value.push(newPost);
}

export function getPosts(): Post[] {
  return postsRef.value;
}

export function getPost(id: number): Post {
  let returnPost = new Post();
  console.log(`Post request with ID: ${id}`);
  postsRef.value.forEach((post) => {
    if (post.id === id) {
      returnPost = post;
      console.log('Return found');
    }
  });
  return returnPost;
}

export function deletePost(id: number): void {
  postsRef.value.forEach((post) => {
    if (post.id === id) {
      postsRef.value.splice(postsRef.value.indexOf(post), 1);
    }
  });
}

export function editPost(post: Post): void {
  const postToEdit: Post = getPost(post.id);
  postToEdit.title = post.title;
  postToEdit.content = post.content;
}

export default function (): {
    addPost: (post: Post) => void;
    getPost: (id: number) => Post;
    getPosts: () => Post[];
    deletePost: (id: number) => void;
    editPost: (post: Post) => void;
    } {
  return {
    addPost,
    getPost,
    getPosts,
    deletePost,
    editPost,
  };
}
