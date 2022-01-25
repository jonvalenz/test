<template>
  <div class="post">
    <div class="post">
      <div class="content title">{{ title }}</div>
      <div class="content blurb">{{ content }}</div>
    </div>
    <div class="controls">
      <button class="delete" type="button" @click="sendEvent('delete')">
        Delete
      </button>
      <button class="edit" type="button" @click="sendEvent('edit')">
        Edit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  emits: ['delete', 'edit'],
  setup(props, { emit }) {
    function sendEvent(event: 'delete' | 'edit') {
      emit(event, props.id);
    }

    return { sendEvent };
  },
});
</script>

<style>
.post .content {
  text-align: left;
  display: block;
  flex-grow: 1;
  padding-top: 0.5em;
  word-wrap: break-word
}

.post .content.title {
  border: 0.1em;
  border-style: none none dotted none;
  font-weight: bold;
  padding-bottom: 0.2em;
}

.post .controls {
  display: flex;
  justify-content: right;
  padding-top: 1em;
}

.post .controls button {
  margin-left: 0.3em;
}

.controls button.delete:hover {
  background-color: red;
  color: white;
}

.controls button.edit:hover {
  background-color: rgb(230, 190, 103);
  color: rgb(255, 255, 255);
}
</style>
