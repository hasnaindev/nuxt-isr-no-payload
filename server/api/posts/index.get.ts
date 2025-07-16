export default defineEventHandler(async () => {
  return (await $fetch<Array<unknown>>('https://jsonplaceholder.typicode.com/todos')).slice(0, 10)
})