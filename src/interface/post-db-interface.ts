import Post from '@/classes/post';
import postsRef from '../assets/post-db';

export function addPost(post: Post): Promise<string> {
  return new Promise((resolve, reject) => {
    if (post.content === '' || Number.isNaN(post.id) || post.content === '') {
      reject(new Error('Invalid Post'));
    } else {
      const newPost: Post = new Post(Date.now(), post.title, post.content);
      postsRef.value.push(newPost);
      resolve('success');
    }
  });
}

export function getPosts(): Post[] {
  return postsRef.value;
}

export function getPost(id: number): Post {
  let returnPost = new Post();
  postsRef.value.forEach((post) => {
    if (post.id === id) {
      returnPost = post;
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

export function editPost(post: Post): Promise<string> {
  const postToEdit: Post = getPost(post.id);
  return new Promise((resolve, reject) => {
    if (postToEdit.content === '' || postToEdit.title === '') {
      reject(new Error('Content or Title Empty'));
    } else {
      postToEdit.title = post.title;
      postToEdit.content = post.content;
      resolve('success');
    }
  });
}

export default function (): {
  addPost: (post: Post) => Promise<string>;
  getPost: (id: number) => Post;
  getPosts: () => Post[];
  deletePost: (id: number) => void;
  editPost: (post: Post) => Promise<string>;
  } {
  return {
    addPost,
    getPost,
    getPosts,
    deletePost,
    editPost,
  };
}
