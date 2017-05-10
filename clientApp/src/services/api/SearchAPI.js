import { SearchPath, GetPath, ServerURL } from '../../constants/Constants';

exports.translate = async (search) => {
  let response;

  try {
    response = await fetch(SearchPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(search)
    });
    console.log(search);
  } catch (err) {
    console.log(err);
  }

  return response.text().then(text => {
    console.log(text);
    return text ? JSON.parse(text) : {status: response.status}
  });
}

exports.getName = async (search) => {
    let response;

    try {
      response = await fetch(SearchPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(search)
      });
    } catch (err) {
      console.log(err);
    }

    return response.text().then(text => {
      return text ? JSON.parse(text) : {status: response.status}
    });
}
