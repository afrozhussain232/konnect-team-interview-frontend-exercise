import { ref, onBeforeMount, watch, type Ref } from 'vue'
import axios from 'axios'
import { debounceFn } from '@/utils/time'
import {
  useServicesStore,
} from '@/stores/services'
import type { Service } from '@/types/services'
// This composable is a simplified example for the exercise **and could likely be improved**.
// Feel free to leave as-is, modify, or remove this file (and any others) as desired.
// https://vuejs.org/guide/reusability/composables.html

interface Services {
  services: Ref<Service[]>;
  loading: Ref<boolean>;
  error: any;
  searchQuery: Ref<string>;
}

const fakeDelay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default function useServices(): Services {
  const services = ref<Service[]>([])
  const loading = ref<boolean>(false)
  const error = ref<any>(false)
  const searchQuery = ref<string>('')
  const servicesStore = useServicesStore()

  const getServices = async (): Promise<any> => {
    try {
      // Initialize loading state
      loading.value = true

      // Fetch data from the API
      const { data } = await axios.get('/api/services?q=' + searchQuery.value)
      // Simulate network delay
      await fakeDelay(500)

      // Store data in Vue ref
      services.value = data
      servicesStore.setServices(data)
    } catch (err: any) {
      error.value = true
    } finally {
      // Reset loading state
      loading.value = false
    }
  }

  const debouncedSearch = debounceFn(getServices, 500)


  watch(searchQuery, () => {
    // Fetch services from the API
    debouncedSearch()
  })

  onBeforeMount(async (): Promise<void> => {
    // Fetch services from the API
    await getServices()
  })

  // Return stateful data
  return {
    services,
    searchQuery,
    loading,
    error,
  }
}
