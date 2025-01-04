<script setup>
import { ref } from 'vue'

const isDialogVisible = ref(false)

function showDialog() {
  isDialogVisible.value = true
}

function hideDialog() {
  isDialogVisible.value = false
}
</script>

<template>
  <div>
    <!-- Button to open the dialog -->
    <button @click="showDialog" class="open-dialog-btn">Open Dialog</button>

    <!-- Dialog -->
    <div v-if="isDialogVisible" class="dialog-overlay">
      <div class="dialog">
        <h2>Dialog</h2>
        <button @click="hideDialog" class="close-dialog-btn">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background overlay */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 0, 0, 0.4); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Dialog box */
.dialog {
  color: black;
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  width: 90%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Buttons */
.open-dialog-btn,
.close-dialog-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.close-dialog-btn:hover {
  background-color: #c0392b;
}
</style>
