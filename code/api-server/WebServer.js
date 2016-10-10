import bodyParser from 'body-parser';
import express from 'express';
import nodemailer from 'nodemailer';
import sendgrid from 'nodemailer-sendgrid-transport';

import { requestIpLease } from './IpCache';
import sanitize from '../common/sanitize';

const app = express();
const api = express();
const transporter = nodemailer.createTransport(sendgrid({
  auth: {
    api_key: process.env.SENDGRID_KEY
  }
}));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));

api.post('/contact', (req, res) => {
  if (!requestIpLease(req.ip)) {
    res.status(403).end();
    return;
  }
  const mailOptions = {
    from: `"${sanitize(req.body.name)}" <${sanitize(req.body.email)}>`,
    to: process.env.EMAIL,
    subject: `[WEBSITE CONTACT] ${sanitize(req.body.subject)}`,
    text: `Phone: ${sanitize(req.body.phone)}\n\n${sanitize(req.body.body)}`,
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, function(error){
    if(error){
      log.warn(error);
      res.status(500).end();
    }
    log.info(`Message sent from ${req.body.email}`);
  });
  res.status(202).end();
});

app.use('/api', api);

app.listen(configuration.api_server.http.port);
log.info(`webserver listening on port ${configuration.api_server.http.port}`);
