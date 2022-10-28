<script setup>
import { ref, computed } from 'vue'

const msg = 'Hello World';
const counter = ref(0);

const favoriteNumbers = ref([]);

const increment = () => counter.value++;
const decrement = () => counter.value--;
const resetCounter = () => counter.value = 0;
const addFavoriteNumber = () => favoriteNumbers.value.push(counter.value);

const isFavoriteNumber = computed(() => {
  const numberSearch = favoriteNumbers.value.find(n => n === counter.value)
  if (numberSearch === 0) return true;
  return numberSearch || false;
});

const calculateClass = computed(() => {
  if (counter.value < 0) return 'negative';
  if (counter.value > 0) return 'positive';
  return 'zero';
});
</script>

<template>
  <h1>{{ msg.toUpperCase() }}!!</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="resetCounter">Reset</button>
  <button :disabled="isFavoriteNumber" @click="addFavoriteNumber">Add Favorite Number</button>
  <h2 :class="calculateClass">
    {{ counter }}
  </h2>
  <ul>
    <li v-for="number in favoriteNumbers" :key="number">
      {{ number }}
    </li>
  </ul>
</template>

<style>
h1 {
  color: red;
}

h2 {
  color: white;
}

.positive {
  background-color: green;
}

.negative {
  background-color: red;
}

.zero {
  background-color: gray;
}
</style>