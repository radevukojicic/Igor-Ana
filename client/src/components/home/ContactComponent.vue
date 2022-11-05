<template>
  <div class="contact">
    <div  class="forma" >
    <h2 style="color:green;margin-bottom:20px"  v-if="formSend">{{this.succ}}</h2>
    <h2 style="color:red;margin-bottom:20px" v-if="formField">All fields are required!</h2>

    <h1>Don't be shy , Get in touch!</h1>
      <form action="">
      <div class="redovi">
        <div>
      <label for="name">Name</label><br>
      <input v-model="name"  type="text" name="name" required>
      </div>
      <div>
      <label class="sh" for="lname">Last Name</label><br>
      <input class="last sh" v-model="lname"  type="text" name="lname" required><br>
      </div>
      </div>
      <label for="email">Email</label><br>
      <input type="email" v-model="email"  required><br>
      <label for="Message">Message</label><br>
      <textarea name="Message" v-model="message"   cols="30" rows="10" required></textarea>
      
      <button class="subm"  type="submit" @click.prevent="sendEmail" >SEND MESSAGE
          <v-progress-circular
          v-if="loading"
      indeterminate
      color="white"
    ></v-progress-circular></button>
      </form>
    </div>

    <div class="imageInfo">
      
        <div>
                <!-- <p><a href="tel:068843784"><strong>Phone number:</strong>068 843 784</a></p> -->
                <p class="bigP" style="font-size:15px ;color:grey; "><a href="mailto:igorbajceta7@gmail.com"><strong>Mail:</strong>igorbajceta7@gmail.com</a></p>
                <p class="bigP" style="font-size:15px ;color:grey; "><a href="tel:068843784"><strong>Number:</strong>068 843 784</a></p>
                <p class="smlP" style="font-size:15px ;color:grey; "><a href="mailto:igorbajceta7@gmail.com"><strong>Mail:</strong>igorbajceta7@gmail.com</a></p>
                <p class="smlP" style="font-size:15px ;color:grey; "><a href="tel:068843784"><strong>Number:</strong>068 843 784</a></p>
                <!-- <div  class="slika"> -->
        
      <!-- </div> -->
              </div>
              
    </div>
  </div>
</template>
<script>
import apiPost from '../../services/service'

export default {
    data () {
        return {
            name: '',
            lname: '',
            email:'',
            message:'',
            formSend: false,
            loading: false,
            succ:null,
            formField: false,
 
      }
     
},
    methods: {
    
      async sendEmail(){
      this.loading = true;
      let formData = {
        'fname':this.name,
        "lname": this.lname,
        'email': this.email,
        'message': this.message
      }

      try {
        // Simple GET request using axios
        if(this.name == '' || this.lname == '' || this.email == '' || this.message == '') {
             this.formField = true; this.loading = false;
             window.scrollTo(0,0);

        }else{
          await apiPost.sendEmail(formData).then(async response => {
          await response.data
          this.succ = response.data.message
          console.log(this.succ)
          
          this.formField = false
          this.loading = false
          this.formSend = true
          window.scrollTo(0,0);
          this.name = ''
           this.lname = ''
           this.email = ''
           this.message = ''

       })
        }
        
       
      } catch (error) {
        console.log(error.message)
      }

      }
        
    },
}
</script>


<style scoped>
.slika{
  background-image: url('https://www.lightsculpting.me/parr.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
}
a{
    text-decoration: none;
    list-style: none;
 }
.last{
    width: 100%;
}
.forma{
    margin: 0px 22px;
}
.btn{
    width: 100%;
    height: 100%;
}
.subm{
    border: 2px solid rgb(0, 0, 0);
    padding: 14px 1px;
    width: 180px;
    font-weight: bold;
    font-size: 15px;
    border-radius: 6px;
    background-color: black;
    color: white;
    letter-spacing: 1px;
    transition: 0.2s ease-in-out;

}
/* .subm:hover{
    transition: 0.2s ease-in-out;
    background-color: white;
    color: black;
    border: 2px solid black;
} */
.redovi{
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
}
.contact{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}
.redovi div{
    width: 49%;
}
input, textarea{
    width: 100%;
    border: 2px solid rgb(192, 192, 192);
    margin-top: 2px;
    margin-bottom: 3px;
    padding: 10px;
    border-radius: 5px;
}
textarea {
   resize: none;
}
.sh{
    margin-left: 9px;
}
.forma h1{
    font-weight: 300;
    margin-bottom: 24px;
    color: black;
}
label{
    font-size: 18px;
    margin-bottom: 0px;
}
.imageInfo{
    text-align: left;
    margin-top: 60px;
    margin-left: 0px;
}
.imageInfo p{
  
}
.bigP{
  margin-top: 500px;
  display: block;
}
.smlP{
  display: none;
}
@media only screen and (max-width: 850px) {
  .imageInfo{
    margin-left: 40px;
    margin-right: 40px;
  }
  .bigP{
    display: none;
  }
  .slika{
    width: 310px;
    height: 310px;
  }
  .smlP{
  display: block;
}
}
@media only screen and (max-width: 600px) {
  .redovi div{
    width: 100%;
   }
   .sh{
    margin-left: 0;
   }
   .smlP{
  display: block;
}
   .bigP{
    display: none;
  }
}
</style>