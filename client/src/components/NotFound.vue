<template>
  <center>
    <h1>Stranica koju trazite ne postoji</h1>
    <p>
      <router-link to="/">Home -></router-link>
    </p>
  </center>
</template>

<script>

  export default {
    name: 'NotFound',
  }

</script>

<style scoped>
  
  center {
    margin: 15vw;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }

</style>