<template>
   <div class="home">
      <div class="gallery">
          <router-link  v-for="item in this.images" :key="item.id" :to="`/wedding-stories/`+item._id">
          <div :style="{'background-image':`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(http://localhost:3000/${item.image})`}" class="wedStori"> 
          <h2 style="color: white;">
            {{item.name}}
              </h2>
              </div>
              </router-link>
          
      </div>
          
    
        <!-- END section -->
   </div>
</template>

<script>
import apiPost from '../../services/service'

export default {
    data () {
        return {
            images: [ ]
 
      }
     
},
    async mounted () {
      try {
        // Simple GET request using axios
        await apiPost.getWebStories().then(async response => {
          this.images = await response.data.wedStories
          console.log(response.data.wedStories)
       })
       
      } catch (error) {
        console.log(error.message)
      }
    },
}
   
</script>

<style scoped>

  .home{
    display: flex;
    justify-content: center;
 

  }
  .gallery{
    width: 65%;
  }
   .wedStori{
        border-radius: 20px;
        width: 100% ;
        height: 250px;
        display: flex;
        cursor: pointer;
        font-size:21px;
        font-weight: lighter;
        background-size: cover;
        background-position: center;
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
      }

    @media only screen and (max-width: 850px) {
   .gallery{
     width: 90%;
  }
}

 
</style>