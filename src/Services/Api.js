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

  return new Promise((resolve, reject) => {
    fetch(url, req).then((response) => {
      return response.json()
        .then(json => ({ json, response }))
    }).then(({ json, response }) => {
      return resolve({ json: json, response: response });
    }).catch((error) => console.log(error));
  });
}
