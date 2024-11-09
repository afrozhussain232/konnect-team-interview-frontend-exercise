import type { Service } from '@/types/services'
import { defineStore } from 'pinia'

// Example Pinia store: https://pinia.vuejs.org/
// This code is not utilized in the take-home exercise starter template.

type ServicesState = {
  services: Service[]
}

export const useServicesStore = defineStore({
  id: 'services',
  state: ():ServicesState => ({
    services: [],
  }),
  getters: {
    getServiceById: (state) => (id:string) => state.services.find((service) => service.id === id),
  },
  actions: {
    setServices(services:Service[]) {
      this.services = services
    },
  },
})
