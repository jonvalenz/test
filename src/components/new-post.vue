<template>
  <div class="new-post">
    <form>
      <input
        :class="{ 'red-bg-title': isEmptyTitle }"
        type="text"
        v-model="post.title"
        placeholder="Title"
      />
      <textarea
        :class="{ 'red-bg-content': isEmptyContent }"
        v-model="post.content"
        placeholder="Content"
      />
      <div class="controls">
        <input type="button" @click="newPost" value="New Post" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Post from '@/classes/post';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['create'],
  setup(_props, { emit }) {
    const post = ref(new Post()).value;
    const isEmptyTitle = ref(false);
    const isEmptyContent = ref(false);

    function newPost(): void {
      if (post.title === '') {
        isEmptyTitle.value = true;

        setTimeout(() => {
          isEmptyTitle.value = false;
        }, 500);
      }
      if (post.content === '') {
        isEmptyContent.value = true;

        setTimeout(() => {
          isEmptyContent.value = false;
        }, 500);
      }
      if (!(post.title === '' || post.content === '')) {
        emit('create', post);
        post.title = '';
        post.content = '';
      }
    }

    return {
      post,
      newPost,
      isEmptyTitle,
      isEmptyContent,
    };
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

.new-post form .red-bg-title {
  background-color: red !important;
  color: white !important;
}

.new-post form .red-bg-content {
  background-color: red !important;
  color: white !important;
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

.new-post form input[type='button'] {
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
