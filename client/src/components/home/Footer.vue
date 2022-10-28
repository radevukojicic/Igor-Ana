<template>
    <div id="footer">
      <div class="infos">
          <v-icon class="insta">mdi-instagram</v-icon>
          <p>&copy; 2022 Igor&Ana. <br> All Rights Reserved.</p>
      </div>
    </div>
</template>


<script>

export default {
    name: "FooterComponent",
}
</script>


<style  scoped>
#footer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    margin-top: 50px;
}
.infos{
    text-align: center;
}
.insta{
    cursor: pointer;
}
</style>