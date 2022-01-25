<template>
  <div class="feed-container">
    <div class="to-center">
      <NewPost @create="commitPost" />
      <div class="feed">
        <ol class="post-container">
          <li v-for="post in posts" :key="post.id">
            <Post
              :id="post.id"
              :title="post.title"
              :content="post.content"
              @delete="deletePost"
              @edit="goToEdit"
            />
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts, deletePost, addPost } from '@/interface/post-db-interface';
import IPost from '@/models/post';
import Post from '@/components/post.vue';
import NewPost from '@/components/new-post.vue';
import RoutNames from '@/constants/route-names';

export default defineComponent({
  name: 'Feed',
  components: {
    Post,
    NewPost,
  },
  setup() {
    const router = useRouter();
    const posts: IPost[] = getPosts();

    function commitPost(post: IPost) {
      addPost(post).catch();
    }

    function goToEdit(id: number) {
      router.push({
        name: RoutNames.Edit,
        params: { id },
      });
    }

    return {
      posts,
      deletePost,
      commitPost,
      goToEdit,
    };
  },
});
</script>

<style>
.feed-container {
  display: flex;
  justify-content: center;
}

.to-center {
  display: flex;
  justify-content: center;
  width: 33%;
  flex-wrap: wrap;
}
.feed {
  display: flex;
  justify-content: center;
  width: 100%;
}

NewPost {
  display: flex;
  flex-basis: 100%;
}

li {
  box-shadow: 10px 5px 15px 5px #bebebe;
  padding: 2em;
  border-radius: 6px;
  margin-top: 1em;
  background: white;
}

.post-container {
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
  width: 100%;
}
</style>
