async function getAccount() {
  return fetch('/api/account')
    .then(res => res.json())
    .catch(() => null);
}

async function getUser() {
  return fetch('/api/user')
    .then(res => res.json())
    .catch(() => null);
}

(async () => {
  const account = await getAccount();
  const user = await getUser();

  console.log(account, user);
})();
