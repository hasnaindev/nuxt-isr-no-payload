import ms from 'ms'

export default function useTimeAgo () {
  const timeAgo = ref()
  const generatedAt = useState(() => new Date().toISOString())
  const date = new Date(generatedAt.value)

  onMounted(() => {
    timeAgo.value = ms(Date.now() - date.valueOf(), { long: true })
  })

  return {
    timeAgo: readonly(timeAgo)
  }
}