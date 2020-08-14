import fetchIntercept from "fetch-intercept";

export const HttpInterceptor = (store) =>
  fetchIntercept.register({
    request: function (url, config) {
      return [url, config];
    },

    requestError: function (error) {
      return Promise.reject(error);
    },

    response: function (response) {
      console.log(response);
      if (response.status == 401) {
        const path = window.location.href;
        let targetStringArray = path.split("/");
        let targetString = targetStringArray[3];
        if (targetString == "user") {
          localStorage.removeItem("user-token");
          window.location.href("/user/login");
          console.log("this is for the admin");
        } else if (targetString == "admin") {
          localStorage.removeItem("admin-token");
          window.location.href("/admin/login");
          console.log("this is for the admin");
        }
      }
      return response;
    },

    responseError: function (error) {
      return Promise.reject(error);
    },
  });
