import type { Restaurant } from "@/types";
import { defineStore } from "pinia";

type StateShape = {
  list: Restaurant[]
}

export const useRestaurantStore = defineStore('RestaurantStore', {
  state: (): StateShape => ({
    list: [
      {
        id: '9f995ce4-d2fc-4d00-af1d-6cb1647c6bd3',
        name: 'Quiche From a Rose',
        address: '283 Thisisnota St.',
        website: 'www.quichefromarose.com',
        status: 'Want to Try',
      },
      {
        id: 'ae62a3da-791b-4f44-99a1-4be1b0ec30b8',
        name: 'Tamago Never Dies',
        address: '529 Letsgofora Dr.',
        website: 'www.tamagoneverdies.com',
        status: 'Recommended',
      },
      {
        id: '9b361dae-2d44-4499-9940-97e188d41a32',
        name: 'Penne For Your Thoughts',
        address: '870 Thisisa St.',
        website: 'www.penneforyourthoughts.com',
        status: 'Do Not Recommend',
      },
    ]
  }),
  getters: {
    numberOfRestaurants: (state): number => {
      return state.list.length
    }
  },
  actions: {
    addRestaurant(payload: Restaurant) {
      this.list.push(payload)
    },
    deleteRestaurant(payload: Restaurant) {
      this.list = this.list.filter((restaurant: Restaurant) => {
        return restaurant.id !== payload.id
      })
    }
  },
})
