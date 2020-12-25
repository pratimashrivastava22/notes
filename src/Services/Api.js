import DBData from './db.json';
const API_BASE = '';

export function api(type = 'GET', endpoint, body = null, token) {
  let url = API_BASE + endpoint;
  let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) {
    header['x-access-token'] = token;
  }

  let req = {
    method: type,
    headers: header,
  };

  if (body) {
    req.body = JSON.stringify(body);
  }

  const auth = () => {
    const { username, password } = body;
    const user = DBData.users.find(x => x.username === username && x.password === password);
    if (!user) return {
      response: {
        status: 400
      },
      json: {
        message: 'Username or password is incorrect'
      }
    };
    return {
      response: {
        status: 200,
        ok: true
      },
      json: {
        id: user.id,
        username: user.username,
        token: 'token'
      }
    };
  }

  // fetch is replaced with mock api response for login
  return new Promise((resolve, reject) => {
    if ((req.method === 'POST' && url === 'users/auth')) {
      const { json, response } = auth();
      return resolve({ json: json, response: response });
    }
  }).catch((error) => console.log(error));;

  // return new Promise((resolve, reject) => {
  //   fetch(url, req).then((response) => {
  //     return response.json()
  //       .then(json => ({ json, response }))
  //   }).then(({ json, response }) => {
  //     return resolve({ json: json, response: response });
  //   }).catch((error) => console.log(error));
  // });

  
}
