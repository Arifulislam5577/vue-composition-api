import { ref, onMounted } from 'vue'

const useFetch = (url) => {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)
  const fetchData = async () => {
    try {
      const res = await fetch(url)
      data.value = await res.json()
      loading.value = false
    } catch (err) {
      error.value = err
      loading.value = false
    }
  }

  onMounted(() => {
    fetchData()
  })
  return { data, loading, error }
}
export default useFetch
