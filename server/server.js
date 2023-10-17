const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.gourlay.me/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/www.gourlay.me/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/www.gourlay.me/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(5000, () => {
	console.log('HTTPS Server running on port 5000');
});

app.use(cors());
app.use(express.json());
app.use("/", router);


const contactEmail = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
      from: email,
      to: "nick@gourlay.me",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Thank's for the Message!" });
      }
    });
  });

