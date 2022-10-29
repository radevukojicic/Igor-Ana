<template>
    <v-footer
   padless
   class="footer"
  >
      <v-card-text class="py-5 text-center">
        Created with <v-icon color="red" small>fa-heart</v-icon> | &copy; 2022 Igor&Ana.
      </v-card-text>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>