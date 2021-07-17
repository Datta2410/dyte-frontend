import axios from 'axios'
const proxyUrl = 'https://nodeproxycors.herokuapp.com'
const url =  'https://pastebin.com'
export const getPaste = (params) => {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({"method":"GET","url":`${url}/raw/${params.pasteId}`,"body":{}});
        const config = {
          method: 'post',
          url: `${proxyUrl}/proxyGet`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        axios(config)
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });      
    })
}
export const createPaste = (params) => {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            "method":"POST",
            "url":`${url}/api/api_post.php`,
            "body":{
                "api_dev_key":"DHvH8ExjxKnghqoURogD3u1V05T9i92J",
                "api_paste_code": params,
                "api_option":"paste"
            }});

        const config = {
        method: 'post',
        url: `${proxyUrl}/proxyPost`,
        headers: { 
            'Content-Type': 'application/json', 
            },
        data
        };

        axios(config)
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });

    })
}