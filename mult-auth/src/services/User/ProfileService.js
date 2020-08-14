import HttpService from "../HttpService";
export const LoadProfile = () => {
  const http = new HttpService();
  let profileUrl = "user/view-profile";
  const tokenId = "user-token";

  return http
    .getData(profileUrl, tokenId)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};
