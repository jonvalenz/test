<template>
  <div class="new-post">
    <form>
      <input type="text" v-model="post.title" placeholder="Title" />
      <textarea v-model="post.content" placeholder="Content" />
      <div class="controls">
        <input type="button" @click="newPost('create-post')" value="New Post" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Post from '@/models/post';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['create-post'],
  setup(_props, { emit }) {
    const post = ref(new Post()).value;

    function newPost(event: 'create-post'): void {
      emit(event, post);
      post.title = '';
      post.content = '';
    }

    return { post, newPost };
  },
});
</script>

<style>
.new-post {
  display: flex;
  justify-content: center;
  justify-self: center;
  flex-wrap: wrap;
  flex-grow: 1;
}

.new-post form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.new-post form input[type='text'] {
  margin: 0;
  width: 100%;
  margin-top: 0.3em;
  border-radius: 5px;
  font-size: 1em;
  outline: none;
}

.new-post form div.controls {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.new-post form div.controls input[type='button'] {
  padding: 1em;
  border-radius: 5px;
  margin: 0;
  margin-top: 0.25em;
}

.new-post form div.controls input[type='button']:hover {
  color: white;
  background-color: green;
}
</style>
