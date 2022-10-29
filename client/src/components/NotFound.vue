<template>
  <div id="main">
  <NavBar/>
  <center>
    <h2>404</h2>
    <h1>The page you are looking for does not exist!
</h1>
    <p>
      <router-link to="/">Go back</router-link>
    </p>
  </center>
  <FooterComponent/>
</div>
</template>

<script>
import NavBar from '@/components/home/HeaderComponent.vue'
import FooterComponent from '@/components/home/Footer.vue'

  export default {
    name: 'NotFound',
    components: {
      NavBar,
      FooterComponent
    }
  }

</script>

<style scoped>
 
  h1 {
    color: var(--border);
    font-size: 2em;
  }
  a{
    text-decoration: none;
    list-style: none;
 }
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
  text-decoration: none;
  border-bottom: 0px;
  color: #000;
 }

 .router-anim-enter-active{
  animation: coming 1.5s;
  animation-delay: 0.3s;
  opacity: 0;
 }
 .router-anim-leave-active{
  animation: going 0.2s;
 }
 @keyframes going{
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
 }
 @keyframes coming{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
 }
</style>