import { ref, Ref } from 'vue';
import { IPost } from '@/models/post';
import posts from '@/assets/sample-posts';

const postDB: Ref<IPost[]> = ref(posts);

export default postDB;
