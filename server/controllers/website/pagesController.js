const imagesCategory = require('../../models/slike')
const wedStories = require('../../models/weddStories')
let nodemailer = require('nodemailer')


module.exports = {

    //index page and categorys

    async index(req, res){
        let q = ""
        console.log(req.params)
        if(req.params){
        if(req.params.q == 'naslovna') q = "naslovna"
        if(req.params.q == 'travel') q = "travel"
        if(req.params.q == 'children') q = "children"
        if(req.params.q == 'social') q = "social"
        if(req.params.q == 'weddings') q = "weddings"
        if(req.params.q == 'birthdays') q = "birthdays"
        }
      
        console.log(q)
        const posts = await imagesCategory.find({category: q}).sort({"createdAt":-1})
        res.send({slike: posts , q : q})
    },

    //contact page

    async contact(req, res){
        res.render('contact', {q: "contact"})
    }
    ,
    //wedding stories page

    async wedStories(req, res){
        let wed = await wedStories.find().sort({"createdAt":-1})
        res.send({q:"wedd-stories", wedStories: wed})
    },

     //wedding stories page SINGLE GALLERY

     async wedStoriesSingle(req, res){
      let wed = await wedStories.findOne({_id : req.params.id})
      res.send({q:wed.name, content: wed})
  },

    //send email via contact form

    async sendEmail(req, res){
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'anaigorwed@gmail.com',
              pass:'adknbqhbcfdyghvq'
            }
          });
        
        let mailOptions = {
            from: 'NOVA PORUKA - ANA&IGOR',
            // to: 'vukojicicdev@gmail.com',
            to: 'ninkovicana05@gmail.com',
            subject: `ANA&IGOR web - NOVA PORUKA! `,
            html: `<strong>Ime : </strong> ${req.body.fname} <br>
            <strong>Prezime : </strong> ${req.body.lname} <br>
            <strong>Email : </strong> ${req.body.email} <br>
            <strong>Poruka : </strong> ${req.body.message} <br>`
          };
        
        
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              res.send({message:"Error while sending message"})
              console.log(error);
            } else {
              res.send({message:"Message sent successfully!", log: info.response})
                            
            }
          });
    }

}