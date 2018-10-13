const fetch = require('node-fetch');
const fbappid = process.env.FBAPPID;
const secret = process.env.ACCOUNTKIT_SECRET;
const accountkitToken = `AA|${fbappid}|${secret}`;

exports.login = async function(req, res) {
  const { code, state, status } = req.query;
  const accessToken = `https://graph.accountkit.com/v1.1/access_token?grant_type=authorization_code&code=${code}&access_token=${accountkitToken}`;
  try {
    const requestAccess = await fetch(accessToken);
    const data = await requestAccess.json();
    const { id, access_token } = data;
    const meUrl = `https://graph.accountkit.com/v1.3/me/?access_token=${access_token}`;
    const requestMe = await fetch(meUrl);
    const me = await requestMe.json();
    const email = me.email.address;
    res.end('email ' + email);
  } catch (e) {
    console.log(e);
    res.end('Error happend!');
  }
};
