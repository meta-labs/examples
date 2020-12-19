function getAccount() {
  return fetch('/api/account')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      $('#name').html(data.name);
      $('#nav-name').html(data.name);
      $('#logo').attr('src', data.branding.logo);
      $('#website_url').attr('href', data.website_url);
      $('#support_email').attr('href', `mailto:${data.support_email}`);
      $('#nav-logo').attr('src', data.branding.logo);
      $('#background').css('background-image', `url(${data.branding.background})`);
    })
    .catch(() => null);
}

function getDate(timestamp) {
  const date = new Date(timestamp)
  var joined = `Joined ${date.toLocaleString("en-US", {month: "long"})} ${date.toLocaleString("en-US", {day: "numeric"})}, ${date.toLocaleString("en-US", {year: "numeric"})}`
  return joined
}

function getUser() {
  return fetch('/api/user')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      $('#username').html(`${data.discord.username}#${data.discord.discriminator}`);
      $('#avatar').attr('src', `https://cdn.discordapp.com/avatars/${data.discord.id}/${data.discord.avatar}.png?size=512`);
      $('#joined').html(getDate(data.created));
      $('#email').html(data.email);
      $('#license').html(data.license.key);
    })
    .catch(() => null);
}

$(document).ready(function() {
  getAccount();
  getUser();
})