import { restaurantStatusList } from '@/constants'

export type Dish = {
  id: string
  name: string
  status: Status
  diet?: Diet
}

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: Status
  diet?: Diet
}

type Status = typeof restaurantStatusList[number]
type Diet = 'Vegetarian' | 'Pescetarian' | 'Keto' | ''
