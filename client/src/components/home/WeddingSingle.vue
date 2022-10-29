<template>
  <div>
   <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card-columns">

          <div v-for="item in images" :key="item.id" class="card-container">
            <div class="card">
              <img :src="`/`+item" alt="">
            </div>
          </div>

         
        </div>
      </div>
    </div>
   </div>
</div>
</template>
<script>
import apiPost from '../../services/service'

export default {
    data () {
        return {
            images: [ ],
            id:this.$route.params.id,
 
      }
     
},
    async mounted () {
      try {

        // Simple GET request using axios
        await apiPost.getWeddingSingle(this.id).then(async response => {
          this.images = await response.data.content.images
          console.log(this.images)
       })
       
      } catch (error) {
        console.log(error.message)
      }
    },
}
</script>


<style scoped>
.card img{
  width: 100%;
  transition: 0.3s;
  border-radius: 5px;
}
.container{
  width: 100%;
  align-items: center;
  justify-content: center;
}
.card{
  border-radius: 5px;
  background-color: rgb(240, 240, 240);
}
@media screen and (max-width:958px) {
  .card-columns{
    column-count: 2;
  }
}

@media screen and (max-width:420px) {
  .card-columns{
    column-count: 1;
  }
}
</style>