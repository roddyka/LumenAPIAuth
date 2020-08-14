import HttpService from "../HttpService";
export const LoadProfile = () => {
  const http = new HttpService();
  let profileUrl = "admin/view-profile";
  const tokenId = "admin-token";

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
