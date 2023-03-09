<template>
  <div>
    <h1 class="error">404 Page</h1>
  </div>

  <router-link to="/" class="link">Back to Home</router-link>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
.error{
    color:orange;
}
</style>
