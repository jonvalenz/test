<template>
  <div class="edit">
    <form>
      <div class="text-input">
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
      </div>
      <div class="controls">
        <div class="buttons">
          <input
            class="cancel"
            type="button"
            @mouseup="toFeed"
            value="Cancel"
          />
          <input
            class="submit"
            type="button"
            @mouseup="editAndReturnToFeed"
            value="Submit"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { editPost, getPost } from '@/interface/post-db-interface';
import IPost from '@/models/post';
import RouteNames from '@/constants/route-names';

export default defineComponent({
  name: 'Edit',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isEmptyTitle = ref(false);
    const isEmptyContent = ref(false);

    const { id, title, content } = getPost(
      parseInt(route.params.id.toString(), 10),
    );
    const post: IPost = { id, title, content };

    function editAndReturnToFeed(): void {
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
        editPost(post).catch();
        router.push({ name: RouteNames.Feed });
      }
    }

    function toFeed(): void {
      router.push({ name: RouteNames.Feed });
    }

    return {
      post,
      editAndReturnToFeed,
      RouteNames,
      isEmptyTitle,
      isEmptyContent,
      toFeed,
    };
  },
});
</script>

<style>
.red-bg-title {
  background-color: red !important;
  color: white !important;
}
.red-bg-content {
  background-color: red !important;
  color: white !important;
}

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
