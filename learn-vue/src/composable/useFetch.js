import axios from 'axios'
import { onMounted, ref, watch } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch (err) {
      error.value = err.message || 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  watch(() => url, fetchData)

  return { data, error, loading, fetchData }
}
