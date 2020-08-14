import HttpService from "../HttpService";

export const SignUpService = (credentials) => {
  const http = new HttpService();
  let signUpUrl = "admin/register";
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

export const LoginAdmin = (credentials) => {
  const http = new HttpService();
  let LoginUpUrl = "admin/login";
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

export const LogOutAdmin = () => {
  const http = new HttpService();
  let LogOutUrl = "admin/logout";
  let tokenId = "admin-token";
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
