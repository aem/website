import bodyParser from 'body-parser';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const api = express();
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

api.use(bodyParser.json());

api.post('/contact', function (req, res) {
  const mailOptions = {
    from: `"Adam Markon" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: `[WEBSITE CONTACT] ${req.body.subject}`,
    text: `Name: ${req.body.name}\n\nEmail: ${req.body.email}\n\nPhone: ${req.body.phone}\n\n${req.body.body}`,
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  res.status(202).end();
});

app.use('/api', api);

app.listen(configuration.api_server.http.port);
console.log(`webserver listening on port ${configuration.api_server.http.port}`);
