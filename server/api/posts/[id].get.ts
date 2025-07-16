export default defineEventHandler(event => {
  const id = getRouterParam(event, 'id')
  return $fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
})