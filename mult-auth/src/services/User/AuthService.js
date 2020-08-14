import HttpService from "../HttpService";

export const SignUpService = (credentials) => {
  const http = new HttpService();
  let signUpUrl = "user/register";
  return http
    .postData(credentials, signUpUrl)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const LoginUser = (credentials) => {
  const http = new HttpService();
  let LoginUpUrl = "user/login";
  return http
    .postData(credentials, LoginUpUrl)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const LogOutUser = () => {
  const http = new HttpService();
  let LogOutUrl = "user/logout";
  let tokenId = "user-token";
  return http
    .getData(LogOutUrl, tokenId)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
