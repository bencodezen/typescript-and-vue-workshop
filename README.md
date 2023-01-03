# TypeScript and Vue with Frontend Masters

Watch the full course on the [Frontend Masters website](https://frontendmasters.com/courses/vue-typescript).

## Prerequisites

- [Git](https://git-scm.com/)
- [Node LTS](https://nodejs.org/en/)
- [Volar VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Installation Instructions

> Note: Make sure to change directories into the `app` directory before running `npm install`.

```bash
git clone https://github.com/bencodezen/typescript-and-vue-workshop.git
cd typescript-and-vue-workshop/app
npm install
```

To run the application, use:
```bash
npm run dev
```

## Course Errata

### Global State Management with Pinia
During the Global State Management with Pinia lesson, the user interface is not reactive. If you delete a restaurant or dish, you need to change views in order to see the updated UI. Follow the steps below to create a reactive interface:

In `RestaurantPage.vue`, import `storeToRefs` from Pinia:

```javscript
import { storeToRefs } from 'pinia'
```

Update the `restaurantList` array:

```javascript
const restaurantList = storeToRefs(restaurantStore).list
```

In the `filteredRestaurantList` computed property, update the `filter` method:
```javascript
return restaurantList.value.filter((restaurant) => { ... })
```

