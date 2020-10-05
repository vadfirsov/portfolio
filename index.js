var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/public', express.static(path.join(__dirname, "public")));

app.post("/sendEmail", function(req, res) {
    console.log("STARTING AJAX EMAIL");
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, //secure port
        secure: true,
        auth: {
            user: 'vadimfirsov.ios@gmail.com',
            pass: 'nveurvtjh'
        },
        tls: {
            rejectUnauthorized:false
        }
    });
    
    var textBody = `FROM: ${req.body.name}; EMAIL: ${req.body.email}; MESSAGE: ${req.body.message}`;
    var htmlBody = `
            <h2>Mail From Contact Form</h2>
            <p>from: ${req.body.name} 
                <a href='mailto:${req.body.email}'>${req.body.email}</a>
            </p>
            <p>${req.body.message}</p>`;
    
    var mail = {
        from: "vadimfirsov.ios@gmail.com",
        to: req.body.email,
        subject: "Mail From Portfolio Webpage!",
        text: textBody,
        html: htmlBody
    };
    transporter.sendMail(mail, function(err, info) {
        if (err) {
            console.log(err);
            console.log("dadasdadadads");
            res.json({message:"Error acured! check the console"});
        }
        else {
            res.status(200).json({message:`msg sent with id: ${info.messageId}`});
        }
        
    });
});

app.listen(3000, function() {
    //in terminal:
    //go to project file and run node first.js
    console.log("Listening on port 3000");
});