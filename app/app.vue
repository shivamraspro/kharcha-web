<template>
  <div
    class="card"
    :class="{ highlighted: isHighlighted }"
  >
    <header>
      <h1>{{ title }}</h1>
      <button @click="toggleHighlight">
        {{ isHighlighted ? "Unhighlight" : "Highlight" }}
      </button>
    </header>

    <section>
      <p v-if="items.length === 0">
        No items available
      </p>
      <ul v-else>
        <li
          v-for="(item, index) in filteredItems"
          :key="item.id"
        >
          <span>{{ index + 1 }}. {{ item.name }}</span>
          <button @click="removeItem(item.id)">
            Remove
          </button>
        </li>
      </ul>
    </section>

    <footer>
      <slot name="footer">
        Default footer text
      </slot>
    </footer>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';

export default {
  name: 'TestCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    initialItems: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const items = ref([...props.initialItems]);
    const isHighlighted = ref(false);

    const filteredItems = computed((a) => {
      if (a) {
        console.log('hello');
      } else {
        console.log('world');
      }
      return items.value.filter((item) => item.name.trim() !== '');
    });

    function toggleHighlight() {
      isHighlighted.value = !isHighlighted.value;
    }

    function removeItem(id) {
      items.value = items.value.filter((item) => item.id !== id);
    }

    watch(items, (newVal) => {
      console.log('Items changed:', newVal);
    });

    onMounted(() => {
      console.log('Component mounted');
    });

    return {
      items,
      isHighlighted,
      filteredItems,
      toggleHighlight,
      removeItem,
    };
  },
};
</script>

<style scoped>
.card {
  border: 1px solid var(--border-color, #ccc);
  border-radius: 8px;
  padding: 1rem;
  background-color: white;
  transition: background-color 0.3s ease;
}

.card.highlighted {
  background-color: #fffae6;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background: #42b983;
  color: white;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #369f6e;
}

ul {
  padding-left: 1.2rem;
}

li {
  margin: 0.2rem 0;
}

footer {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}
</style>
