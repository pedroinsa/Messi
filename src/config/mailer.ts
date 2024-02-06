'use strict'
// import * as nodemailer from 'nodemailer'
import  {createTransport } from 'nodemailer'


export const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "pedrotinsausti@gmail.com",
      pass: "pcme dchl mpsf fznb",
    },
  });