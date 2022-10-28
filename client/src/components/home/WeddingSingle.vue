<template>
  <div>
    <h1>TEsts</h1>
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

</style>