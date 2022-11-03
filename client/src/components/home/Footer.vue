<template>
    <div id="footer">
      <div class="infos">
          <a href="https://instagram.com/igor.bajceta?igshid=YmMyMTA2M2Y="><v-icon class="insta">mdi-instagram</v-icon></a>
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
a{
    text-decoration: none;
}
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