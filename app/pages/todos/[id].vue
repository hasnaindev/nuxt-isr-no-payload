<template>
  <h1>TODO</h1>
  <p>TODO: {{ todo.title }}</p>
  <p>Generated at: {{ timeAgo }}</p>
</template>

<script setup>
const { timeAgo } = useTimeAgo()
const { id } = useRoute().params
const { data: todo } = await useFetch(`/api/posts/${id}`, { key: `todo-${id}` })
</script>
