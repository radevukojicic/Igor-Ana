<template>
    <div class="homeNav">

    <!--DESKTOP HEADER -->
    <div style="padding-top: 20px;" id="header">
      <router-link to="/">
      <div class="logo">
        <h2>IGOR&ANA</h2>
        <h5>PHOTOGRAPHY</h5>
      </div>
      </router-link>
      <nav>
        <ul>
            <router-link to="/"><li class="underline">Home</li></router-link>
            <li id="portfolio"
            @mouseenter="hover = true"
            @mouseleave="hover = false" 
            >Portfolio</li>
            <div id="dropDown"
              @mouseenter="hover = true"
              @mouseleave="hover = false" 
              :class="{ 'bigNav': hover }"
               class="drop">
              <router-link class="link underline" to="/travel">Travel</router-link>
              <router-link class="link underline" to="/weddings">Weddings</router-link>
              <router-link class="link underline" to="/birthdays">Birhdays</router-link>
              <router-link class="link underline" to="/social">Social Media</router-link>
            </div>

            <router-link to="/wedding-stories"><li class="underline">Wedding stories</li></router-link>
            <router-link to="/contact"><li class="underline">Contact</li></router-link>
        </ul>
      </nav>
    </div>

    <!--MOBILE HEADER -->
    <div id="headerMobile">
 <v-app-bar 
  color="#FFFFFF"
  
 class="mb-11"  >
      <v-app-bar-nav-icon color="#000000" @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title style="margin-left:-30px">IGOR&ANA</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="mobileNav"
    >
     <v-icon class="arrow" @click="drawer = false" color="primary">fa-arrow-left-long</v-icon>

     <div class="navMenuMob">
        <div style="text-align:center; margin-left:-40px">
          <router-link to="/">
          <h2>IGOR&ANA</h2>
          <p>PHOTOGRAPHY</p>
          </router-link>
        </div>
      </div>
      <div class="linksMobile">
        <router-link to="/"><li>Home</li></router-link>
            <li id="portfolio"
            @click="hover = !hover"
            >Portfolio</li>
            <div id="dropDownMobile"
              :class="{ 'bigNav': hover }"
               class="dropDownMobile">
              <router-link  class="link" to="/travel">Travel</router-link>
              <router-link class="link" to="/weddings">Weddings</router-link>
              <router-link class="link" to="/birthdays">Birhdays</router-link>
              <router-link   class="link" to="/social">Social Media</router-link>
            </div>

            <router-link to="/wedding-stories"><li>Wedding stories</li></router-link>
            <router-link to="/contact"><li>Contact</li></router-link>
      </div>
      
    </v-navigation-drawer>
    </div>

    </div>
</template>


<script>
// import FooterComponent from '@/components/home/Footer.vue'

export default {
    name: "HeaderComponent",
    // components:{FooterComponent},
    data () {
        return {
           drawer: false,
           group: null,
           hover:false,
           hoverLinks:false,
        };
      },
      methods: {

      },
      mounted() {
        this.hover = false
      },
}
</script>


<style scoped>
nav{
  margin-right:-220px
}
.dropDownMobile a{
  color: rgb(91, 91, 91);
}
#dropDownMobile{
  margin-left: 30px;

}
.underline {
  position: relative;
  color: 
#000000;
}

.underline:after {
  content: '';
  position: absolute;
  width: 90%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: 
#ababab;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underline:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.footerMobileNav{
  position: absolute;
  bottom: 0;
  margin-left: 20px;
  font-size: 16px;
}
.mobileNav{
  display: flex;
  justify-content: center;
  align-content: center;
}
.navMenuMob h2{
  font-size: 23px;
}
.navMenuMob p{
  transform: translateY(-10px);
  color: grey;
  font-size: 12px;
}
.navMenuMob{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 40px;
}
.linksMobile li{
  color: rgb(87, 87, 87);
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 38px;
}
.linksMobile{
  width: 100%;
  height: 300px;
}
.arrow{
  position: fixed;
  right: 0;
  margin: 11px 14px;
  font-size: 17px;
}
  #portfolio{
    cursor: pointer;

  }
  .linksMobile  #portfolio{
      color: rgb(87, 87, 87);

  }
  .drop{
    z-index: 500;
    position: absolute;
    margin-left: 70px;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    width: 0px;
    height: 0px;
    overflow: hidden;
    background: white;
    transition: 0.4s ease-in-out;

  }

    .dropDownMobile{
    display: flex;
    width: 170px;
    flex-direction: column;
    height: 0px;
    overflow: hidden;
    background: white;
    opacity: 0;
    transition: 0.4s ease-in-out;
    border: 0px solid black;


  }
  .link{
    margin-left: 13px;
    margin-top: 8px;
    font-size: 16px;
  }
  .bigNav{

    padding-top: 8px;
    transition: 0.4s ease-in-out;
    height: 170px;
    border: 1px solid black;
    opacity: 1;
    width: 170px;
}
  #header{
    height: 210px;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .logo{
    text-align: center;
  }
  .logo h5{
    transform: translateY(-8px);
    font-size: 14px;
  }
  .logo h2{
    font-weight: 500;
    font-size: 28px;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  nav ul {
    display: flex;
    flex-direction: row;
  }
  nav ul li {
    margin-right: 21px;
    font-size: 15px;
    color: black;
    font-weight: bold;
  }
  @media only screen and (max-width: 1200px) {
  nav{
    margin-right: 0px;
  }
}
  @media only screen and (max-width: 850px) {
  #header{
    display: none;
  }
}
 @media only screen and (min-width: 850px) {
  #headerMobile{
    display: none;
  }
}

</style>