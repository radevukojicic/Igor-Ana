<template>
   
<div>

<div class="container-fluid" id="fh5co-image-grid">
                                <div class="grid">
                                  <div class="grid-sizer"></div>
                                  <div class="grid-item item animate-box" data-animate-effect="fadeIn">
                                      <a href="images/img_1.jpg" class="image-popup" title="Name of photo or title here">
                                      <div class="img-wrap">
                                        <img src="https://i1.sndcdn.com/avatars-000054399496-9rim3w-t240x240.jpg" alt="" class="img-responsive">
                                      </div>
                                      <div class="text-wrap">
                                        <div class="text-inner popup">
                                          <div>
                                          <h2>Name of photo or title here</h2>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div class="grid-item item animate-box" data-animate-effect="fadeIn">
                                      <a href="images/img_1.jpg" class="image-popup" title="Name of photo or title here">
                                      <div class="img-wrap">
                                        <img src="https://i1.sndcdn.com/avatars-000054399496-9rim3w-t240x240.jpg" alt="" class="img-responsive">
                                      </div>
                                      <div class="text-wrap">
                                        <div class="text-inner popup">
                                          <div>
                                          <h2>Name of photo or title here</h2>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div class="grid-item item animate-box" data-animate-effect="fadeIn">
                                      <a href="images/img_1.jpg" class="image-popup" title="Name of photo or title here">
                                      <div class="img-wrap">
                                        <img src="https://i1.sndcdn.com/avatars-000054399496-9rim3w-t240x240.jpg" alt="" class="img-responsive">
                                      </div>
                                      <div class="text-wrap">
                                        <div class="text-inner popup">
                                          <div>
                                          <h2>Name of photo or title here</h2>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div class="grid-item item animate-box" data-animate-effect="fadeIn">
                                      <a href="images/img_1.jpg" class="image-popup" title="Name of photo or title here">
                                      <div class="img-wrap">
                                        <img src="https://i1.sndcdn.com/avatars-000054399496-9rim3w-t240x240.jpg" alt="" class="img-responsive">
                                      </div>
                                      <div class="text-wrap">
                                        <div class="text-inner popup">
                                          <div>
                                          <h2>Name of photo or title here</h2>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div class="grid-item item animate-box" data-animate-effect="fadeIn">
                                      <a href="images/img_1.jpg" class="image-popup" title="Name of photo or title here">
                                      <div class="img-wrap">
                                        <img src="https://i1.sndcdn.com/avatars-000054399496-9rim3w-t240x240.jpg" alt="" class="img-responsive">
                                      </div>
                                      <div class="text-wrap">
                                        <div class="text-inner popup">
                                          <div>
                                          <h2>Name of photo or title here</h2>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
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
            images: [ ]
 
      }
     
},

    async mounted () {
      try {
        // Simple GET request using axios
        await apiPost.getWebImages().then(async response => {
          this.images = await response.data.slike
          console.log(response.data.slike)
       })
       
      } catch (error) {
        console.log(error.message)
      }
    },
}
</script>


<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 33.3%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  filter: grayscale(1) brightness(0.5);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s linear;
}
.column img:hover {
  filter: grayscale(0);
}
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
  .column img {
    filter: grayscale(0) brightness(1);
  }
}

</style>