<template>
  <div class="btn" >
    <!-- implememnt the buttons  -->
    <h1 class="head1">Counter: {{ counter }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
  <!-- Routing the home page -->
  <router-link to="/" class="link">Back to Home</router-link>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    reset() {
      this.$store.dispatch("reset");
    },
  },
};
</script>

<style>

  .btn{
    padding: 20px;
  }
  button{
    padding:10px;
    margin:10px;
    background-color:rgb(47, 43, 117);
    color:white;
    border-radius:5px;
    font-size: 20px;
    border: none;
  }
  button:hover{
    background-color:rgba(43, 95, 117, 0.5);
    border: 2px solid skyblue;
    color: black;
    font-family: 'Courier New', Courier, monospace;
    font-size: larger;

  }
  .head1{
    font-size: 50px;
    color:rgb(93, 90, 150);
    margin-bottom: 30px; 
    
  }
.link{
  text-decoration:none;
  color:rgb(93, 90, 150); 
  font-size:25px;
  cursor: pointer;
  font-family:'Courier New', Courier, monospace;
}


</style>