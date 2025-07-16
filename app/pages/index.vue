<template>
  <h1>HOME</h1>
  <ol>
    <li v-for="todo in todos" :key="todo.id">
      <NuxtLink :to="`/todos/${todo.id}`">{{ todo.title }}</NuxtLink>
    </li>
  </ol>
  <p>Generated at: {{ timeAgo }}</p>
</template>

<script setup>
const { timeAgo } = useTimeAgo()
const { data: todos } = await useFetch('/api/posts', { key: 'todos' })
</script>
