<script setup>

import { loginWithGoogle, logout } from '../firebase/auth.js'
import user from '../store/profile.js'

</script>

<template>
  <div>
    <h1>This is an login page</h1>
    <div class="formsContainer">

      <!-- user card from firebase -->
      <div v-if="user" class="userCard">
        <img :src="user.photoURL" alt="user photo" />
        <h2>{{ user.displayName }}</h2>
        <p>{{ user.email }}</p>
      </div>
      <!-- form login with email and password -->
      <form v-if="!user"> 
        <h3>Login</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <!-- form register with email, name and password -->
      <form v-if="!user"> 
        <h3>Register</h3>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
    </div>
    <!-- Login with google button -->
    <div>
      <button v-if="!user" class="loginButton" @click="loginWithGoogle">Login with Google</button>
      <button v-if="user" class="logoutButton" @click="logout">Logout</button>
    </div>
    <!-- Logout button -->
  </div>
</template>

<style scoped>

button{
  margin: 1rem;
}

.formsContainer{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Google login button */
.loginButton {
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.logoutButton{
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.userCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
}

.userCard img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

form{
  display: flex;
  flex-direction: column;
  max-width: 290px;
  margin: 0 auto;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

input, textarea{
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea{
  resize: none;
}

form button{
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}

</style>
