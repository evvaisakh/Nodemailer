const express=require('express');
const app=new express();
const nodemailer=require('nodemailer');

require('dotenv').config();
MAIL_USERNAME= process.env.MAIL_USERNAME;
MAIL_PASSWORD= process.env.MAIL_PASSWORD;
CLIENTID= process.env.CLIENTID;

const mailTransporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
       user: MAIL_USERNAME,
       pass: MAIL_PASSWORD
    }
})

const mailOptions = {
    from:{
        name:"Vaisakh Vijayan",
        address: process.env.MAIL_USERNAME
    },
    to: CLIENTID,
    subject: "Sending an email using Nodemailer",
    text: "Hello... This mail is created and send using Nodemailer. That was easy!!!"
}

mailTransporter.sendMail(mailOptions,(err)=>{
    if(err){
        console.log("It has an error",err)
    }
    else{
        console.log("Email has sent!")
    }
})