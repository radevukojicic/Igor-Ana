<template>
    <div id="main">
      <Nav-bar/>
      <router-view/>
      <FooterComponent/>
    </div>
</template>


<script>
import NavBar from '@/components/home/HeaderComponent.vue'
import FooterComponent from '@/components/home/Footer.vue'

export default {
    name: "HomeView",
    components: {
      NavBar,
      FooterComponent
    }
}
</script>


<style>
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
 #main{
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 3px;
    line-height: 1.8;
    font-size: 18px;
    color:rgb(145, 145, 145);
 }
/* MAIN CSS */
h1, h2, h3, h4, h5,
.h1, .h2, .h3, .h4, .h5 {
  line-height: 1.45;
  font-weight: normal;
  color: #000;
 }

 a{
    text-decoration: none;
    list-style: none;
 }

</style>