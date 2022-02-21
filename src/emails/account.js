const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = function (name, email) {
  sgMail.send({
    to: email,
    from: "pradyumnaramesh26@gmail.com",
    subject: "thanks for registering with us",
    text: `welcome to the app,${name},let me know how you get along with the app`,
  });
};

const sendCancellationEmail = function (name, email) {
  sgMail.send({
    to: email,
    from: "pradyumnaramesh26@gmail.com",
    subject: "sorry to see you leaving",
    text: `${name},we are sad to see you leave,can you share the reason with us?`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
