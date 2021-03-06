require('dotenv').config();

export default {
  transport: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EAMIL_PASSWORD
    }
  }
};
