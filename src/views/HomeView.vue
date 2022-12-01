<script setup>

import user from '../store/profile.js';
import { ref } from 'vue';

const name = ref('')
const email = ref('')
const message = ref('')


const comments = ref([
  {
    id: 1,
    name: 'John Doe',
    email: '',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: '',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  }
])

/* onMounted(async () => {
  comments.value = await getComments()
}) */


/* const addComment = () => {
  let comment = {
    id: comments.value.length + 1,
    name: name.value,
    email: email.value,
    body: message.value
  }
  comments.value.push(comment)
  name.value = ''
  email.value = ''
  message.value = ''
} */

</script>

<template>
  <main>
    <h1>Home</h1>
    <!-- {{ updateData }} -->
    <form v-if="user">
      <input v-model="name" type="text" placeholder="Name" />
      <input v-model="email" type="email" placeholder="Email" />
      <textarea v-model="message" placeholder="Comment" @keyup.enter="addNewComment"></textarea>
      <button @click.prevent="addNewComment">Submit</button>
    </form>
    <h2>Comments</h2>
    <div class="cardContainer">
      <div class="card" v-for="comment in comments" :key="comment.id">
        <h3>Author: {{ comment.name }}</h3>
        <div class="cardContent">
          <p>{{ comment.body }}</p>
        </div>
        <p class="muted">Mail: {{ comment.email }}</p>
        <button @click="deleteComment(comment.id)">Delete</button>
      </div>
    </div>
  </main>
</template>

<style scoped>

form{
  display: flex;
  flex-direction: column;
  max-width: 290px;
  margin: 0 auto;
  gap: 0.5rem;
}

input, textarea{
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea{
  resize: none;
}

button{
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}

.cardContainer{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.card {
  position: relative;
  background: #f4f4f4;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 15rem;
  min-height: 5rem;
  min-width: 290px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.cardContent{
  display: flex;
  margin: 1rem 0;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;

}

.card button{
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}

.muted{
  color: red;
  font-size: 0.7rem;
}
</style>
