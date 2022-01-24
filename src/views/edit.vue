<template>
  <div class="edit">
    <form>
      <div class="text-input">
        <input type="text" v-model="post.title" placeholder="Title" />
        <textarea v-model="post.content" placeholder="Content" />
      </div>
      <div class="controls">
        <div class="buttons">
          <input
            class="cancel"
            type="button"
            @mouseup="$router.push({ name: Routes.Feed })"
            value="Cancel"
          />
          <input
            class="submit"
            type="button"
            @mouseup="editAndReturnToFeed()"
            value="Submit"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { editPost, getPost } from '@/interface/post-db-interface';
import { IPost } from '@/models/post';
import Routes from '@/models/route-names';

export default defineComponent({
  name: 'Edit',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const { id, title, content } = getPost(
      parseInt(route.params.id.toString(), 10),
    );
    const post: IPost = { id, title, content };

    function editAndReturnToFeed(): void {
      editPost(post);
      router.push({ name: Routes.Feed });
    }

    return { post, editAndReturnToFeed, Routes };
  },
});
</script>

<style>
.edit {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.edit form {
  border: 1px;
  border-color: rgb(199, 199, 199);
  border-style: solid;
  border-radius: 15px;
  padding: 1em;
  width: 33%;
}

.edit form .text-input {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.edit form .controls input[type='button'] {
  margin-right: 0;
}

.controls {
  display: flex;
  justify-content: end;
  margin-top: 0.3em;
}

.id-display {
  display: flex;
  align-items: center;
  display: flex;
  margin-left: 0.5em;
  color: rgb(94, 94, 94);
  font-size: 0.8em;
}

.edit form input[type='text'] {
  margin-bottom: 0.4em;
  border: none;
  box-sizing: border-box;
  width: 100%;
}

.controls .cancel:hover {
  background-color: red;
  color: white;
}

.controls .submit:hover {
  background-color: rgb(144, 214, 40);
  color: white;
}
</style>
