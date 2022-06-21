const express = require("express");

const app = express();

const nodemailer = require("nodemailer");

let PORT = process.env.PORT || 3000;

app.post("/send-email", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codertom100@gmail.com",
      pass: "newbedev99",
    },
    tls: {
      rejectUnauthorized: false,
    }
  });
  
  let mailOptions = {
    from: "codertom100@gmail.com",
    to: "thanhthien09081999@gmail.com",
    subject: "Testing",
    text: "First email send from nodejs using nodemailer",
  };
  
  transporter.sendMail(mailOptions, function (err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email send successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
