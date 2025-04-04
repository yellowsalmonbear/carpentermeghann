
const express = require('express');
const app = express();

const nodemailer = require("nodemailer");


const PORT = process.env.PORT || 5000;

// Middleware//
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/contact.html')
})

app.post('/', (req, res)=>{
  console.log(req.body)
    

// create a .env file in your project and paste your password and email there as a variables and use those variables on your contact form 
    
//app password is from gmail "app password" "app name"
const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: '465',
        auth: {
            user: 'teachersheeshka@gmail.com',
            pass: 'rifw laoi wmqq iwbr'
        }
    });

    const mailOptions = {
           from: req.body.email, 
           //WHERE IS THE EMAIL GOING??
           to: 'jsheeshka@gmail.com',
           subject: `Message from ${req.body.email}: ${req.body.subject}`,
           text: req.body.message
        };

        transporter.sendMail(mailOptions, (error, info)=>{
                if(error){
                      console.log(error);
                      res.send('error');
                  }else{ 
                      console.log('Email sent: ' + info.response);
                      res.send('success')
                  }
  
  
    });
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
}) 